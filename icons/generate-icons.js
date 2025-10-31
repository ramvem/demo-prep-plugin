// Simple icon generator using data URLs
// This creates base64 encoded PNG images that can be decoded

const fs = require('fs');
const path = require('path');

// Function to create an SVG icon
function createSVG(size) {
  const padding = size * 0.1;
  const screenWidth = size - (padding * 2);
  const screenHeight = screenWidth * 0.65;
  const screenX = padding;
  const screenY = padding;

  const barPadding = size * 0.15;
  const barWidth = screenWidth * 0.3;
  const barHeight = size * 0.05;
  const barX = screenX + barPadding;
  const barY = screenY + barPadding;
  const barSpacing = size * 0.08;

  const standWidth = screenWidth * 0.3;
  const poleWidth = size * 0.08;
  const poleHeight = size * 0.15;
  const poleX = screenX + (screenWidth - poleWidth) / 2;
  const standY = screenY + screenHeight;

  const baseWidth = screenWidth * 0.4;
  const baseHeight = size * 0.06;
  const baseX = screenX + (screenWidth - baseWidth) / 2;
  const baseY = standY + poleHeight - baseHeight;

  const dotRadius = size * 0.06;
  const dotX = screenX + screenWidth - (padding * 2);
  const dotY = screenY + (padding * 2);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#357ABD;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Screen background -->
  <rect x="${screenX}" y="${screenY}" width="${screenWidth}" height="${screenHeight}"
        fill="url(#screenGradient)" stroke="#2C3E50" stroke-width="${Math.max(1, size * 0.02)}"/>

  <!-- Presentation elements -->
  <!-- Title bar -->
  <rect x="${barX}" y="${barY}" width="${screenWidth - (barPadding * 2)}" height="${barHeight}"
        fill="rgba(255, 255, 255, 0.9)"/>

  <!-- Content bars -->
  <rect x="${barX}" y="${barY + barSpacing}" width="${barWidth}" height="${barHeight * 0.7}"
        fill="rgba(255, 255, 255, 0.9)"/>
  <rect x="${barX}" y="${barY + barSpacing * 1.7}" width="${barWidth * 1.2}" height="${barHeight * 0.7}"
        fill="rgba(255, 255, 255, 0.9)"/>
  <rect x="${barX}" y="${barY + barSpacing * 2.4}" width="${barWidth * 0.8}" height="${barHeight * 0.7}"
        fill="rgba(255, 255, 255, 0.9)"/>

  <!-- Stand pole -->
  <rect x="${poleX}" y="${standY}" width="${poleWidth}" height="${poleHeight}" fill="#2C3E50"/>

  <!-- Stand base -->
  <rect x="${baseX}" y="${baseY}" width="${baseWidth}" height="${baseHeight}" fill="#2C3E50"/>

  <!-- Demo indicator dot -->
  <circle cx="${dotX}" cy="${dotY}" r="${dotRadius}" fill="#E74C3C"/>
  <circle cx="${dotX - dotRadius * 0.3}" cy="${dotY - dotRadius * 0.3}" r="${dotRadius * 0.4}"
          fill="rgba(255, 255, 255, 0.4)"/>
</svg>`;
}

// Generate SVG files for each size
const sizes = [16, 32, 48, 128];

sizes.forEach(size => {
  const svg = createSVG(size);
  const filename = path.join(__dirname, `icon${size}.svg`);
  fs.writeFileSync(filename, svg);
  console.log(`Created ${filename}`);
});

console.log('\nSVG icons created successfully!');
console.log('To convert to PNG, you can:');
console.log('1. Open generate-icons.html in a browser and save canvases as PNG');
console.log('2. Use an online SVG to PNG converter');
console.log('3. Use ImageMagick: convert icon16.svg icon16.png');
