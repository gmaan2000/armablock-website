from PIL import Image
import sys

def process_logo(input_path, output_path):
    print(f"Opening image {input_path}...")
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    print(f"Original size: {img.size}")
    
    new_data = []
    # We want to make white pixels transparent. Let's say anything close to white.
    threshold = 240
    
    for item in data:
        # item is (R, G, B, A)
        # If it's very white, make it transparent
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0))
        else:
            # Keep as is, or make it pure black for maximum contrast
            new_data.append(item)
            
    img.putdata(new_data)
    
    # We also need to crop the tagline. The tagline is likely at the bottom.
    # Let's just crop the bottom 25% based on previous CSS (clip-path: inset(0 0 25% 0)).
    width, height = img.size
    crop_height = int(height * 0.75)
    img_cropped = img.crop((0, 0, width, crop_height))
    
    # Let's trim any remaining transparent space
    bbox = img_cropped.getbbox()
    if bbox:
        img_cropped = img_cropped.crop(bbox)
        
    print(f"Cropped size: {img_cropped.size}")
    
    img_cropped.save(output_path, "PNG")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    process_logo("public/assets/logo.png", "public/assets/logo_transparent.png")
