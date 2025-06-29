const express = require('express');
const http = require('http');
const path = require('path');

// Load environment variables FIRST with error handling
try {
  require('dotenv').config({ 
    path: path.resolve(__dirname, '.env') 
  });
  console.log('✅ Dotenv loaded from:', path.resolve(__dirname, '.env'));
} catch (error) {
  console.error('⚠️  Warning: Could not load dotenv:', error.message);
}

// Log environment status immediately
console.log('\n🔍 Environment Check on Startup:');
console.log('   AIRTABLE_API_KEY:', process.env.AIRTABLE_API_KEY ? `✅ Found (${process.env.AIRTABLE_API_KEY.substring(0,4)}...)` : '❌ MISSING');
console.log('   AIRTABLE_BASE_ID:', process.env.AIRTABLE_BASE_ID ? `✅ Found (${process.env.AIRTABLE_BASE_ID})` : '❌ MISSING');
console.log('   NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('   Working Directory:', process.cwd());
console.log('\n');

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());

// CORS - Production-ready configuration
app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    process.env.FRONTEND_URL || 'http://localhost:3001'
  ].filter(Boolean);
  
  const origin = req.headers.origin;
  if (!origin || allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin || '*');
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Request logging
app.use((req, res, next) => {
  console.log(`📨 ${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Initialize variables for Airtable (but don't crash if it fails)
let base = null;
let io = null;
let Airtable = null;

// Try to load Airtable module
try {
  Airtable = require('airtable');
  console.log('✅ Airtable module loaded');
} catch (error) {
  console.error('❌ Could not load Airtable module:', error.message);
  console.error('   Run: npm install airtable');
}

// Try to initialize Airtable (but don't crash if it fails)
if (Airtable && process.env.AIRTABLE_API_KEY && process.env.AIRTABLE_BASE_ID) {
  try {
    base = new Airtable({ 
      apiKey: process.env.AIRTABLE_API_KEY,
      endpointUrl: 'https://api.airtable.com',
      requestTimeout: 30000
    }).base(process.env.AIRTABLE_BASE_ID);
    console.log('✅ Airtable client initialized');
  } catch (error) {
    console.error('❌ Failed to initialize Airtable client:', error.message);
    base = null;
  }
} else {
  console.warn('⚠️  Airtable not initialized - missing module or credentials');
}

// Try to initialize Socket.IO (but don't crash if it fails)
try {
  const socketIo = require('socket.io');
  io = socketIo(server, {
    cors: {
      origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        process.env.FRONTEND_URL || 'http://localhost:3001'
      ].filter(Boolean),
      methods: ['GET', 'POST'],
      credentials: true
    },
    transports: ['polling', 'websocket'],
    allowEIO3: true
  });
  
  io.on('connection', (socket) => {
    console.log('✅ Socket.IO client connected:', socket.id);
    socket.on('disconnect', (reason) => {
      console.log('🔌 Socket.IO client disconnected:', socket.id, 'Reason:', reason);
    });
  });
  
  console.log('✅ Socket.IO initialized');
} catch (error) {
  console.error('⚠️  Socket.IO not initialized:', error.message);
  console.error('   Run: npm install socket.io');
}

// Health check endpoint - ALWAYS WORKS
app.get('/health', (req, res) => {
  res.json({
    status: 'running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: {
      hasAirtableKey: !!process.env.AIRTABLE_API_KEY,
      hasBaseId: !!process.env.AIRTABLE_BASE_ID,
      airtableReady: !!base,
      socketIoReady: !!io
    }
  });
});

// Debug endpoint - ALWAYS WORKS
app.get('/api/debug', (req, res) => {
  res.json({
    server: 'Express server is running',
    port: PORT,
    environment: {
      airtableKey: process.env.AIRTABLE_API_KEY ? 'Set' : 'Not set',
      baseId: process.env.AIRTABLE_BASE_ID || 'Not set',
      nodeVersion: process.version,
      platform: process.platform,
      memory: process.memoryUsage(),
      cwd: process.cwd()
    },
    modules: {
      express: '✅ Loaded',
      airtable: Airtable ? '✅ Loaded' : '❌ Not loaded',
      socketIo: io ? '✅ Loaded' : '❌ Not loaded',
      dotenv: '✅ Loaded'
    },
    initialization: {
      airtableClient: base ? '✅ Ready' : '❌ Not initialized',
      socketIo: io ? '✅ Ready' : '❌ Not initialized'
    }
  });
});

// Test endpoint - returns dummy data if Airtable isn't working
app.get('/api/test-projects', async (req, res) => {
  res.json([
    { id: '1', name: 'Test Project 1', status: 'Building' },
    { id: '2', name: 'Test Project 2', status: 'Live' },
    { id: '3', name: 'Test Project 3', status: 'Testing' }
  ]);
});

// Main projects endpoint with comprehensive error handling
app.get('/api/projects', async (req, res) => {
  console.log('\n📋 GET /api/projects called');
  
  // Check if Airtable is initialized
  if (!base) {
    console.error('❌ Airtable not initialized');
    
    const missingItems = [];
    if (!Airtable) missingItems.push('Airtable module (run: npm install airtable)');
    if (!process.env.AIRTABLE_API_KEY) missingItems.push('AIRTABLE_API_KEY in .env file');
    if (!process.env.AIRTABLE_BASE_ID) missingItems.push('AIRTABLE_BASE_ID in .env file');
    
    return res.status(503).json({
      error: 'Airtable not configured',
      message: 'The server is running but Airtable is not properly configured',
      missing: missingItems,
      help: 'Please check server console for details'
    });
  }
  
  try {
    console.log('🔄 Attempting to fetch from Airtable...');
    console.log('   Base ID:', process.env.AIRTABLE_BASE_ID);
    console.log('   Table: Projects (or tblJCWNtJPspIxcDC)');
    
    let records;
    
    // Try with table name first
    try {
      records = await base('Projects').select({
        maxRecords: 100,
        view: 'Grid view'
      }).all();
      console.log('✅ Fetched using table name "Projects"');
    } catch (nameError) {
      if (nameError.statusCode === 404) {
        console.log('⚠️  Table name "Projects" not found, trying table ID...');
        // Try with table ID
        records = await base('tblJCWNtJPspIxcDC').select({
          maxRecords: 100
        }).all();
        console.log('✅ Fetched using table ID "tblJCWNtJPspIxcDC"');
      } else {
        throw nameError;
      }
    }
    
    console.log(`✅ Successfully fetched ${records.length} records`);
    
    // Map records - try both field names and field IDs
    const projects = records.map(record => {
      const getField = (fieldName, fieldId, defaultValue = '') => {
        return record.get(fieldName) || record.get(fieldId) || defaultValue;
      };
      
      return {
        id: record.id,
        projectId: getField('Project ID', 'fldt2uqsBAs8iQlyL', ''),
        name: getField('Project Name', 'fldV9xdwcDkMt9dNO', 'Unnamed Project'),
        status: getField('Status', 'fld94mbrM8R9c8apl', 'Building'),
        deadline: getField('Deadline', 'fld6BTXsUHNTWYlrv', null),
        assignedManager: getField('Manager (from Assigned Manager)', 'fldmBfIV2rtlr4ZWB', []),
        tasks: getField('Tasks', 'fld5lb8nCSK4xBPo5', [])
      };
    });
    
    res.json(projects);
    
  } catch (error) {
    console.error('❌ Airtable request failed:', error);
    
    // Detailed error response
    const errorResponse = {
      error: 'Airtable request failed',
      message: error.message,
      type: error.constructor.name
    };
    
    if (error.statusCode) {
      errorResponse.statusCode = error.statusCode;
      
      switch (error.statusCode) {
        case 401:
          errorResponse.help = 'Invalid API key. Check AIRTABLE_API_KEY in .env file';
          break;
        case 403:
          errorResponse.help = 'API key does not have access to this base';
          break;
        case 404:
          errorResponse.help = 'Base or table not found. Verify base ID: ' + process.env.AIRTABLE_BASE_ID;
          break;
        case 422:
          errorResponse.help = 'Invalid request format';
          break;
        case 429:
          errorResponse.help = 'Rate limited. Wait 30 seconds';
          break;
      }
    }
    
    res.status(error.statusCode || 500).json(errorResponse);
  }
});

// Tasks endpoint (similar pattern)
app.get('/api/tasks', async (req, res) => {
  if (!base) {
    return res.status(503).json({
      error: 'Airtable not configured',
      message: 'The server is running but Airtable is not properly configured'
    });
  }
  
  try {
    const records = await base('tblTu01GpPvZM70Hw').select({
      maxRecords: 100
    }).all();
    
    const tasks = records.map(record => ({
      id: record.id,
      ...record.fields
    }));
    
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({
      error: 'Failed to fetch tasks',
      message: error.message
    });
  }
});

// Webhook endpoint for Airtable updates
app.post('/api/webhooks/airtable-update', (req, res) => {
  try {
    console.log('Received Airtable webhook:', req.body);
    
    // Broadcast the update to all connected clients if Socket.IO is available
    if (io) {
      io.emit('task_updated', req.body);
    }
    
    res.status(200).json({ message: 'Webhook received successfully' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ 
      message: 'Error processing webhook',
      error: error.message 
    });
  }
});

// Add webhook endpoint for real-time project updates
app.post('/api/webhooks/airtable-projects', (req, res) => {
  try {
    console.log('Received Airtable projects webhook:', req.body);
    
    // Broadcast the update to all connected clients if Socket.IO is available
    if (io) {
      io.emit('projects_updated', req.body);
    }
    
    res.status(200).json({ message: 'Webhook received successfully' });
  } catch (error) {
    console.error('Error processing projects webhook:', error);
    res.status(500).json({ 
      message: 'Error processing webhook',
      error: error.message 
    });
  }
});

// Serve static files from Next.js build output
app.use(express.static(path.join(__dirname, '../mondabot-dashboard/out')));

// Catch-all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/') || req.path === '/health') {
    return next();
  }
  
  // Serve the Next.js app for all other routes
  res.sendFile(path.join(__dirname, '../mondabot-dashboard/out/index.html'), (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Error loading application');
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: `Route ${req.method} ${req.path} does not exist`
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('💥 Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`\n🚀 Express server running on http://localhost:${PORT}`);
  console.log('\n📊 Available endpoints:');
  console.log(`   GET  http://localhost:${PORT}/health - Server health check`);
  console.log(`   GET  http://localhost:${PORT}/api/debug - Debug information`);
  console.log(`   GET  http://localhost:${PORT}/api/test-projects - Test endpoint (dummy data)`);
  console.log(`   GET  http://localhost:${PORT}/api/projects - Fetch projects from Airtable`);
  console.log(`   GET  http://localhost:${PORT}/api/tasks - Fetch tasks from Airtable`);
  
  if (!base) {
    console.log('\n⚠️  WARNING: Airtable is not configured!');
    console.log('   The server is running but cannot fetch real data.');
    console.log('   Check the missing items listed above.');
  } else {
    console.log('\n✅ Server is ready to handle requests!');
  }
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`\n❌ Port ${PORT} is already in use!`);
    console.error('   Another process is using this port.');
    console.error('   Solutions:');
    console.error('   1. Kill the other process: taskkill /F /IM node.exe (Windows)');
    console.error('   2. Use a different port: PORT=3002 npm run server');
    process.exit(1);
  } else {
    console.error('❌ Server error:', error);
    process.exit(1);
  }
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

// Catch uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception:', error);
  console.error(error.stack);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

module.exports = { app, server, io }; 