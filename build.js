#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('Starting build process...');

try {
  // Use npx to run astro build
  execSync('npx astro build', { 
    stdio: 'inherit',
    cwd: process.cwd()
  });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
