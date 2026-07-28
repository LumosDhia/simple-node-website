// Build script: compiles public static assets to dist/ directory
const fs = require('fs');
const path = require('path');

console.log('📦 Starting Build Process...');

const srcDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy public assets to dist
const files = fs.readdirSync(srcDir);
files.forEach(file => {
  const srcFile = path.join(srcDir, file);
  const distFile = path.join(distDir, file);
  fs.copyFileSync(srcFile, distFile);
  console.log(`  Copied ${file} -> dist/`);
});

console.log('✅ Build Complete! Production assets ready in dist/');
