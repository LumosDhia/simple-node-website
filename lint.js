// Linting validation script
const fs = require('fs');
const path = require('path');

console.log('🔍 Running Code Quality & Lint Checks...');

const jsFiles = ['server.js', 'test.js', 'build.js', 'public/app.js'];

let pass = true;
jsFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const code = fs.readFileSync(filePath, 'utf-8');
    // Simple syntax check by parsing with Function constructor or basic sanity
    try {
      new Function(code);
      console.log(`  ✓ ${file} syntax valid`);
    } catch (e) {
      console.error(`  ❌ Syntax error in ${file}:`, e.message);
      pass = false;
    }
  }
});

if (!pass) {
  process.exit(1);
}

console.log('✅ Lint & Syntax Checks Passed!');
