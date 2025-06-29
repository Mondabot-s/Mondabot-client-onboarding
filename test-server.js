// test-server.js - Test if server can start at all
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Test server is working on port 3001\n');
});

server.listen(3001, () => {
  console.log('✅ Basic test server running on http://localhost:3001');
  console.log('   If this works, the port is free and Node.js is working');
  console.log('   Press Ctrl+C to stop');
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error('❌ Port 3001 is already in use!');
    console.error('   Kill all Node processes: taskkill /F /IM node.exe');
  } else {
    console.error('❌ Server error:', error);
  }
}); 