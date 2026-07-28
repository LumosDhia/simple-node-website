// Simple automated test suite for Node.js application
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Starting Automated Unit & Integration Tests...');

// Test 1: Verify public/index.html exists and contains valid structure
const indexPath = path.join(__dirname, 'public', 'index.html');
assert.strictEqual(fs.existsSync(indexPath), true, 'index.html must exist in public/');
const htmlContent = fs.readFileSync(indexPath, 'utf-8');
assert.ok(htmlContent.toLowerCase().includes('<!doctype html>'), 'index.html must contain standard HTML header');
assert.ok(htmlContent.toLowerCase().includes('<body'), 'index.html must contain a body tag');
console.log('  [PASS] Test 1: index.html structure validated');

// Test 2: Verify server file exports correctly
const app = require('./server');
assert.ok(app, 'server.js must export express app instance');
console.log('  [PASS] Test 2: Express server loaded successfully');

console.log('All Unit Tests Passed Successfully!');
