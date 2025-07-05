const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Mondabot Dashboard in Production Mode...\n');

const isRailway = process.env.RAILWAY_ENVIRONMENT === 'production';
const port = process.env.PORT || 3001;

if (isRailway) {
  console.log('🚂 Railway Production Mode Detected');
  console.log(`📡 Starting unified server on port ${port}...\n`);
  
  // In Railway, we run the Express server which serves both API and Next.js
  const server = spawn('node', ['server/server.js'], {
    cwd: path.join(__dirname, '..'),
    shell: true,
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
      RAILWAY_ENVIRONMENT: 'production'
    }
  });
  
  server.on('error', (err) => {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  });
  
  server.on('close', (code) => {
    console.log(`🛑 Server exited with code ${code}`);
    process.exit(code);
  });
  
} else {
  console.log('🏠 Local Production Mode');
  console.log('📡 Starting backend on port 3001...');
  console.log('🎨 Starting frontend on port 3000...\n');
  
  // Local production mode - run both servers
  const backend = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..', 'server'),
    shell: true,
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production', PORT: 3001 }
  });
  
  backend.on('error', (err) => {
    console.error('❌ Failed to start backend:', err);
    process.exit(1);
  });
  
  setTimeout(() => {
    const frontend = spawn('npm', ['start'], {
      cwd: path.join(__dirname, '..', 'mondabot-dashboard'),
      shell: true,
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'production', PORT: 3000 }
    });
    
    frontend.on('error', (err) => {
      console.error('❌ Failed to start frontend:', err);
      backend.kill();
      process.exit(1);
    });
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down servers...');
      backend.kill('SIGTERM');
      frontend.kill('SIGTERM');
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      console.log('\n🛑 Shutting down servers...');
      backend.kill('SIGTERM');
      frontend.kill('SIGTERM');
      process.exit(0);
    });
    
  }, 2000);
} 