#!/usr/bin/env python3
"""
Convert SVG icons to PNG format.
Requires: pip install cairosvg pillow
Alternative: pip install svglib reportlab pillow
"""

import os
import sys

def convert_with_cairosvg():
    """Convert using cairosvg (best quality)"""
    try:
        import cairosvg

        sizes = [16, 32, 48, 128]
        for size in sizes:
            svg_file = f'icon{size}.svg'
            png_file = f'icon{size}.png'

            if os.path.exists(svg_file):
                cairosvg.svg2png(url=svg_file, write_to=png_file, output_width=size, output_height=size)
                print(f'✓ Created {png_file}')
            else:
                print(f'✗ {svg_file} not found')

        return True
    except ImportError:
        return False

def convert_with_svglib():
    """Convert using svglib + reportlab (fallback)"""
    try:
        from svglib.svglib import svg2rlg
        from reportlab.graphics import renderPM
        from PIL import Image

        sizes = [16, 32, 48, 128]
        for size in sizes:
            svg_file = f'icon{size}.svg'
            png_file = f'icon{size}.png'

            if os.path.exists(svg_file):
                drawing = svg2rlg(svg_file)
                renderPM.drawToFile(drawing, png_file, fmt='PNG')

                # Resize to ensure exact dimensions
                img = Image.open(png_file)
                img = img.resize((size, size), Image.Resampling.LANCZOS)
                img.save(png_file)

                print(f'✓ Created {png_file}')
            else:
                print(f'✗ {svg_file} not found')

        return True
    except ImportError:
        return False

def main():
    print('Converting SVG icons to PNG...\n')

    # Try cairosvg first (best quality)
    if convert_with_cairosvg():
        print('\n✓ All icons converted successfully using cairosvg!')
        return

    # Fallback to svglib
    if convert_with_svglib():
        print('\n✓ All icons converted successfully using svglib!')
        return

    # If neither library is available
    print('✗ No SVG conversion library found!')
    print('\nPlease install one of the following:')
    print('  pip install cairosvg')
    print('  pip install svglib reportlab pillow')
    print('\nAlternatively, you can:')
    print('  1. Open generate-icons.html in a browser and right-click to save each canvas as PNG')
    print('  2. Use an online converter like https://cloudconvert.com/svg-to-png')
    print('  3. Use ImageMagick: convert icon16.svg icon16.png')
    sys.exit(1)

if __name__ == '__main__':
    main()
