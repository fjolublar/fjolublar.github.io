import requests
import argparse
import os


def download_cover(book: dict, url: str) -> None:
    """Downloading the Cover from the given URL"""

    book_title: str = book["title"]
    book_author: str = book["author_name"][0]

    print(f"Downloading the Cover for the book with Title '{book_title}' from Author '{book_author}'")
    response = requests.get(url)

    os.makedirs("book_covers", exist_ok=True)

    storage_path: str = f"book_covers/{book_title}.png"
    with open(storage_path, "wb") as f:
        f.write(response.content)

    print(f"Downloaded the Cover to '{storage_path}'!")


def get_covered_book(books: list[dict], cover_size: str = "L") -> tuple[dict, str]:
    """Find a book that contains a cover image and return it together with the URL of the cover"""

    found: bool = False

    for book in books:
        cover_id: str = book.get("cover_i", "")
        cover_edition_key: str = book.get("cover_edition_key", "")
        if not cover_id and not cover_edition_key:
            continue

        if cover_id:
            url = f"https://covers.openlibrary.org/b/id/{cover_id}-{cover_size}.jpg"
            found = True
            break

        if cover_edition_key:
            url = f"https://covers.openlibrary.org/b/olid/{cover_edition_key}-{cover_size}.jpg"
            found = True
            break

    if not found:
        print("Unfortunately no Book with a Cover found! Exiting!")
        exit(0)

    print(f"The Cover can be found here: '{url}'")
    return book, url


def get_books(title: str, author: str) -> list[dict]:
    """Find all books with the given title and author"""

    url = "https://openlibrary.org/search.json"
    params = {"q": title, "author": author}

    response = requests.get(url, params=params)
    print(f"Searched for the book in url: {response.url}")

    data: dict = response.json()
    books: list[dict] = data["docs"]

    if not books:
        print("Unfortunately no books found! Exiting!")
        exit(0)

    return books


def main():
    """Parse the given args and find the cover of the given book"""

    parser = argparse.ArgumentParser(description="A simple CLI tool to download Book Covers")

    parser.add_argument("--title", help="Book's title")
    parser.add_argument("--author", help="Author's name")
    parser.add_argument("-d", "--download",  help="Download the cover if found", action='store_true')

    args = parser.parse_args()

    if not all([getattr(args, "title"), getattr(args, "title")]):
        print(f"Need to provide both Book's title and the Author!")
        exit(1)

    print(f"Searching for Book with title: '{args.title}' from author '{args.author}'")

    books: list[dict] = get_books(args.title, args.author)

    book, url = get_covered_book(books)

    if getattr(args, "download"):
        download_cover(book, url)


if __name__=="__main__":
    main()
