# Step screenshots

One folder per app, one image per step, in order:

    public/shots/whatsapp/w1.jpg
    public/shots/whatsapp/w2.jpg

Register them in `src/data/guides.js` — the path, the real pixel size, and the
instruction in all four languages. See the README at the project root.

Shrink before committing. 720px wide at JPEG 85 keeps the screen text readable
and each file near 130KB:

    sips -s format jpeg -s formatOptions 85 --resampleWidth 720 \
         shot.png --out public/shots/<platform>/1.jpg

Read the real size back with:

    sips -g pixelWidth -g pixelHeight public/shots/<platform>/1.jpg

Shoot on a real device, capture only the step being described, and blur your own
name, photo and phone number before saving.
