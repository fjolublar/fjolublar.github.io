# Book Covers

Normally it's not wanted to download Book Covers from OpenLibrary: see [API usage guidelines](https://openlibrary.org/dev/docs/api/covers)!

If the cover is not found in https://openlibrary.org/ however we need to download it from somewhere and enter it here explicitly.

If one wants to nevertheless download the Cover for personal usage this script can be used.

Usage:

```cmd
python ./app/scrape.py --title "hitchhiker's guide to the galaxy" --author "Douglas Adams" --download
```

Running the above script should download the cover image in the [book_covers](https://github.com/fjolublar/fjolublar.github.io/blob/main/book_covers/The%20Hitch%20Hiker's%20Guide%20to%20the%20Galaxy.jpg) dir.
