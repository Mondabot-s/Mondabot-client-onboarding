require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const Airtable = require('airtable');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:5173"], // Support both Next.js and Vite default ports
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3001;

// Initialize Airtable
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Mondabot Dashboard API Server' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// API endpoint to fetch tasks from Airtable
app.get('/api/tasks', async (req, res) => {
  try {
    console.log('Fetching tasks from Airtable...');
    const records = await base('Project Tasks').select({
      // You can add filtering, sorting, or field selection here if needed
      // filterByFormula: "Status != 'Completed'",
      // sort: [{field: "Created", direction: "desc"}]
    }).all();
    
    const tasks = records.map(record => ({
      id: record.id,
      ...record.fields
    }));
    
    console.log(`Successfully fetched ${tasks.length} tasks`);
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks from Airtable:', error);
    res.status(500).json({ 
      message: 'Error fetching tasks from Airtable',
      error: error.message 
    });
  }
});

// Webhook endpoint for Airtable updates
app.post('/api/webhooks/airtable-update', (req, res) => {
  try {
    console.log('Received Airtable webhook:', req.body);
    
    // Broadcast the update to all connected clients
    io.emit('task_updated', req.body);
    
    res.status(200).json({ message: 'Webhook received successfully' });
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ 
      message: 'Error processing webhook',
      error: error.message 
    });
  }
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Socket.IO server ready for connections`);
  console.log(`🔗 API endpoints available:`);
  console.log(`   GET  http://localhost:${PORT}/api/tasks`);
  console.log(`   POST http://localhost:${PORT}/api/webhooks/airtable-update`);
});

module.exports = { app, server, io }; 