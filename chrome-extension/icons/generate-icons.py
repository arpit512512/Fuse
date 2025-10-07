#!/usr/bin/env python3
"""Generate Fuse extension icons in PNG format."""

try:
    from PIL import Image, ImageDraw, ImageFont
    import os
except ImportError:
    print("Error: PIL/Pillow not found. Install it with:")
    print("  pip install Pillow")
    print("\nAlternatively, open create-icons.html in a browser and save the icons manually.")
    exit(1)

def create_icon(size, filename):
    """Create a simple icon with 'F' on black background."""
    # Create a black background
    img = Image.new('RGBA', (size, size), color='black')
    draw = ImageDraw.Draw(img)
    
    # Calculate font size (70% of icon size)
    font_size = int(size * 0.7)
    
    try:
        # Try to use a system font
        font = ImageFont.truetype("Arial", font_size)
    except:
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
        except:
            # Fallback to default font
            font = ImageFont.load_default()
    
    # Draw the 'F' text in white, centered
    text = "F"
    
    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (size - text_width) // 2 - bbox[0]
    y = (size - text_height) // 2 - bbox[1]
    
    draw.text((x, y), text, fill='white', font=font)
    
    # Save the image
    img.save(filename)
    print(f"✓ Created {filename}")

# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Generate all three icon sizes
sizes = [16, 48, 128]
for size in sizes:
    filename = os.path.join(script_dir, f'icon{size}.png')
    create_icon(size, filename)

print("\n✓ All icons generated successfully!")
print("You can now load the extension in Chrome.")




