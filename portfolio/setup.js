const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Kuldip Lohare Portfolio...\n');

// Check if Node.js version is compatible
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 14) {
  console.error('❌ Node.js version 14 or higher is required');
  console.error(`Current version: ${nodeVersion}`);
  process.exit(1);
}

console.log(`✅ Node.js version: ${nodeVersion}`);

// Install dependencies
console.log('\n📦 Installing dependencies...');

try {
  console.log('Installing root dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  console.log('Installing backend dependencies...');
  execSync('cd backend && npm install', { stdio: 'inherit' });

  console.log('Installing frontend dependencies...');
  execSync('cd frontend && npm install', { stdio: 'inherit' });

  console.log('✅ All dependencies installed successfully!');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Check if .env file exists
const envPath = path.join(__dirname, 'backend', '.env');
if (!fs.existsSync(envPath)) {
  console.log('\n⚠️  Backend .env file not found');
  console.log('Please create backend/.env with the following content:');
  console.log(`
PORT=5000
JWT_SECRET=kuldip_portfolio_secret_key_2024
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=Kuldip@9764
DB_NAME=portfolio_db
  `);
} else {
  console.log('✅ Backend .env file found');
}

console.log('\n🎯 Setup completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Make sure MySQL is running');
console.log('2. Create database: CREATE DATABASE portfolio_db;');
console.log('3. Run the database initialization script: mysql -u root -p portfolio_db < database/init.sql');
console.log('4. Start the development servers: npm run dev');
console.log('\n🔐 Login credentials:');
console.log('Username: kuldipl09');
console.log('Password: Kuldip@7887');
console.log('\n🌐 Application URLs:');
console.log('Frontend: http://localhost:3000');
console.log('Backend API: http://localhost:5000');
console.log('\n🎉 Happy coding!');