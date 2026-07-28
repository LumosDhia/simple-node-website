// Simple automated test suite for Node.js application
const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('🧪 Starting Automated Unit & Integration Tests...');

// Test 1: Verify public/index.html exists and contains valid structure
const indexPath = path.join(__dirname, 'public', 'index.html');
assert.strictEqual(fs.existsSync(indexPath), true, 'index.html must exist in public/');
const htmlContent = fs.readFileSync(indexPath, 'utf-8');
assert.ok(htmlContent.includes('<!DOCTYPE html>'), 'index.html must contain standard HTML header');
assert.ok(htmlContent.includes('Security-Hardened CI/CD'), 'index.html must contain project title');
console.log('  ✓ Test 1 Passed: index.html structure validated');

// Test 2: Verify server file exports correctly
const app = require('./server');
assert.ok(app, 'server.js must export express app instance');
console.log('  ✓ Test 2 Passed: Express server loaded successfully');

console.log('✅ All Unit Tests Passed Successfully!');
