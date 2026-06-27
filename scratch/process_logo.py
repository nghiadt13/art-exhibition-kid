from PIL import Image
import os

input_path = "f:/Work_Space/Project/exhibition/Screenshot 2026-06-27 134005.png"
output_path = "f:/Work_Space/Project/exhibition/art-exhibition-kid/public/logo.png"

if not os.path.exists(input_path):
    print(f"Error: input file does not exist at {input_path}")
    exit(1)

img = Image.open(input_path)
img = img.convert("RGBA")

datas = img.getdata()
new_data = []

# Detect and replace white background
for item in datas:
    # Check if pixel is close to white (R, G, B > 240)
    if item[0] > 245 and item[1] > 245 and item[2] > 245:
        new_data.append((255, 255, 255, 0))  # Transparent
    else:
        new_data.append(item)

img.putdata(new_data)

# Trim transparent edges (bbox)
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

img.save(output_path, "PNG")
print("Successfully processed new logo image and saved to public/logo.png!")
