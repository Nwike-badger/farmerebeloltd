// optimize-images.js
import sharp from "sharp";
import fs from "fs";
import path from "path";

// Input folder (where your big images live)
const inputDir = "./src/assets";

// Output folder (optimized images will go here)
const outputDir = "./src/assets/optimized";

// Ensure output folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Define sizes and formats
const sizes = [400, 800, 1600]; // small, medium, large
const formats = [
  { ext: "jpg", options: { quality: 80 } }, 
  { ext: "webp", options: { quality: 80 } }, 
  { ext: "avif", options: { quality: 50 } } // AVIF compresses more efficiently
];

// Find all image files in the input directory
const files = fs.readdirSync(inputDir)
  .filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file))
  .map(file => path.join(inputDir, file));

files.forEach(file => {
  const fileName = path.basename(file, path.extname(file)); // "farm"
  
  sizes.forEach(size => {
    formats.forEach(fmt => {
      const outputPath = path.join(outputDir, `${fileName}-${size}.${fmt.ext}`);
      
      sharp(file)
        .resize({ width: size })
        .toFormat(fmt.ext, fmt.options)
        .toFile(outputPath)
        .then(() => {
          console.log(`✅ ${fileName} → ${outputPath}`);
        })
        .catch(err => {
          console.error(`❌ Error with ${fileName}:`, err);
        });
    });
  });
});
