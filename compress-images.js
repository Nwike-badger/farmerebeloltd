// compress-images.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

// ✅ List the 12 images you want to compress
const files = [
  "./src/assets/farm.png",
  "./src/assets/factory.png",
  "./src/assets/farm5.png",
  "./src/assets/palmfruits6.png",
  "./src/assets/home.png",
  "./src/assets/palmfruits.png",
  "./src/assets/Palm Fruits Image.png",
  "./src/assets/palmkerneloil.png",
  "./src/assets/palmoil6.png"
];

const outputDir = "./src/assets/compressed";

// make sure output dir exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function compress() {
  for (const file of files) {
    const basename = path.basename(file, path.extname(file));

    await sharp(file)
      .resize({ width: 1600 }) // ✅ keep big enough for fullscreen
      .jpeg({ quality: 90 })   // ✅ high quality JPG
      .toFile(path.join(outputDir, `${basename}.jpg`));

    console.log(`✅ Compressed ${basename}`);
  }
}

compress();
