# Book Covers

Normally it's not wanted to download Book Covers from OpenLibrary: see [api usag Guidelines](https://openlibrary.org/dev/docs/api/covers)!

If the cover is not found in https://openlibrary.org/ however we need to download it from somewhere and enter it here explicitly.
If one wants to nevertheless download the Cover for personal usage this script can be used.

Usage:

```cmd
python ./app/scrape.py --title "hitchhiker's guide to the galaxy" --author "Douglas Adams" --download
```