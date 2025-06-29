const http = require('http');
// Load environment variables from server/.env
require('dotenv').config({ path: require('path').resolve(process.cwd(), 'server', '.env') });

const checkServer = () => {
  console.log('🔍 Checking Express server status...');
  
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/health',
    method: 'GET',
    timeout: 5000,
  };

  const req = http.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        console.log(`✅ Express server is running on port 3001`);
        console.log(`📊 Status: ${res.statusCode} - ${response.status}`);
        console.log(`🕒 Server time: ${response.timestamp}`);
        console.log('🚀 You can now start the Next.js app with: npm run dev');
      } catch (error) {
        console.log(`✅ Express server is running on port 3001 (Status: ${res.statusCode})`);
      }
    });
  });

  req.on('error', (error) => {
    console.error('❌ Express server is not running on port 3001');
    console.error('📝 Please start it with one of these commands:');
    console.error('   • npm run server');
    console.error('   • node server/server.js');
    console.error('   • cd server && npm start');
    console.error('');
    console.error('💡 Make sure you have the required environment variables:');
    console.error('   • AIRTABLE_API_KEY');
    console.error('   • AIRTABLE_BASE_ID');
    console.error('');
    console.error(`🔧 Error details: ${error.message}`);
    process.exit(1);
  });

  req.on('timeout', () => {
    req.destroy();
    console.error('❌ Server check timed out');
    console.error('🔧 The server might be starting up or overloaded');
    process.exit(1);
  });

  req.end();
};

// Add some helpful environment check
const checkEnvironment = () => {
  const requiredVars = ['AIRTABLE_API_KEY', 'AIRTABLE_BASE_ID'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.warn('⚠️  Warning: Missing environment variables:');
    missing.forEach(varName => {
      console.warn(`   • ${varName}`);
    });
    console.warn('');
    console.warn('📄 Make sure you have a .env file in your server directory with:');
    console.warn('   AIRTABLE_API_KEY=your_key_here');
    console.warn('   AIRTABLE_BASE_ID=your_base_id_here');
    console.warn('');
  }
};

if (require.main === module) {
  checkEnvironment();
  checkServer();
}

module.exports = { checkServer, checkEnvironment }; 