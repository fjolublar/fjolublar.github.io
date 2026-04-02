#!/usr/bin/env python3

import os
import sys
from PIL import Image


def resize_images(input_folder, output_folder, width, height):
    for filename in os.listdir(input_folder):
        # Process only JPEG files
        if filename.lower().endswith((".jpg", ".jpeg")):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename)

            try:
                with Image.open(input_path) as img:
                    # Resize image
                    resized_img = img.resize((width, height))

                    # Save to output folder with same name
                    resized_img.save(output_path)

                    print(f"Resized: {filename}")

            except Exception as e:
                print(f"Failed to process {filename}: {e}")


if __name__ == "__main__":
    if len(sys.argv) != 5:
        print(
            "Usage: python resize_images.py <input_folder> <output_folder> <width> <height>"
        )
        sys.exit(1)

    input_folder = sys.argv[1]
    output_folder = sys.argv[2]
    width = int(sys.argv[3])
    height = int(sys.argv[4])

    os.makedirs(output_folder, exist_ok=True)
    resize_images(input_folder, output_folder, width, height)
