const fs = require('fs');
const path = require('path');

// Simple function to create a basic PNG icon with "F" text
function createIconSVG(size) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#000000" rx="${size * 0.0625}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.7}" font-weight="bold" fill="#ffffff" text-anchor="middle" dominant-baseline="central">F</text>
</svg>`;
}

// Create SVG files first
const sizes = [16, 48, 128];
const iconsDir = __dirname;

sizes.forEach(size => {
  const svgContent = createIconSVG(size);
  const svgPath = path.join(iconsDir, `icon${size}.svg`);
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created ${svgPath}`);
});

console.log('\nSVG icons created! To convert to PNG, you can:');
console.log('1. Use an online converter like https://cloudconvert.com/svg-to-png');
console.log('2. Use ImageMagick: convert icon16.svg icon16.png');
console.log('3. Use the create-icons.html file and save manually');
console.log('\nOr install sharp for automatic conversion: npm install sharp');
console.log('Then run: node convert-to-png.js');




