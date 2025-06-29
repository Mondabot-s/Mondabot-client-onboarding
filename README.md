# Mondabot Dashboard

A full-stack dashboard application with real-time updates, built with Next.js frontend and Express.js backend, integrated with Airtable.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Airtable account with API key

### Environment Setup

1. **Create environment file in the server directory:**
   ```bash
   cd server
   cp .env.example .env  # or create a new .env file
   ```

2. **Add your Airtable credentials to `server/.env`:**
   ```env
   AIRTABLE_API_KEY=your_airtable_api_key_here
   AIRTABLE_BASE_ID=appYNr1T9N3F7sm81
   PORT=3001
   ```

### Installation & Running

1. **Install all dependencies:**
   ```bash
   npm run setup
   ```

2. **Start both servers (recommended):**
   ```bash
   npm run dev
   ```
   This will start both the Express server (port 3001) and Next.js app (port 3000) concurrently.

3. **Or start servers individually:**
   ```bash
   # Terminal 1: Start Express server
   npm run server
   
   # Terminal 2: Start Next.js app
   npm run dev:next
   ```

4. **Visit the application:**
   - Next.js App: http://localhost:3000
   - Test Page: http://localhost:3000/test-page
   - Express API: http://localhost:3001

## 🔧 Architecture

### Fixed Issues ✅

1. **API 404 Error**: Created Next.js API proxy route (`/api/projects`) that forwards requests to Express server
2. **WebSocket Connection**: Enhanced error handling and reconnection logic
3. **CORS Issues**: Properly configured CORS headers in Express server
4. **Error Handling**: Improved error messages and user feedback

### How it Works

```
Frontend (Next.js :3000)
    ↓ API Request to /api/projects
Next.js API Route (/api/projects/route.ts)
    ↓ Proxy to Express Server
Express Server (:3001)
    ↓ Fetch from Airtable
Airtable Database
```

## 📡 Real-time Features

- **WebSocket Connection**: Real-time updates via Socket.IO
- **Auto-refresh**: Projects automatically update when Airtable data changes
- **Connection Status**: Visual indicators for API and WebSocket status

## 🛠 Available Scripts

### Root Directory Scripts
- `npm run dev` - Start both servers concurrently
- `npm run dev:next` - Start only Next.js app
- `npm run dev:server` - Start only Express server
- `npm run server` - Start Express server in production mode
- `npm run check-server` - Verify Express server is running
- `npm run health` - Check overall system health
- `npm run setup` - Install dependencies for all projects
- `npm run clean` - Clean all node_modules and build files
- `npm run fresh-install` - Clean and reinstall everything

### Server Directory Scripts
- `npm start` - Start Express server
- `npm run dev` - Start Express server with nodemon (auto-restart)

### Next.js App Scripts
- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js app for production
- `npm run start` - Start Next.js production server

## 🔍 Troubleshooting

### Common Issues

1. **"Backend server is not available" Error**
   ```bash
   # Check if Express server is running
   npm run check-server
   
   # Start Express server
   npm run server
   ```

2. **WebSocket Connection Failed**
   - Ensure Express server is running on port 3001
   - Check browser console for detailed error messages
   - The app will show connection status in the UI

3. **Environment Variables Missing**
   ```bash
   # Check environment variables
   npm run check-env
   ```

4. **Port Already in Use**
   ```bash
   # Find process using port 3001
   netstat -ano | findstr :3001
   
   # Kill the process (Windows)
   taskkill /PID <process_id> /F
   ```

5. **Airtable Connection Issues**
   - Verify your `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID`
   - Check Airtable API limits
   - Ensure your Airtable base structure matches the expected schema

### Development Tips

1. **Use the server status component** - It shows real-time connection status
2. **Check browser console** - Detailed error messages for debugging
3. **Monitor Express server logs** - Shows API requests and Airtable interactions
4. **Use the health check** - `npm run health` for overall system status

## 📁 Project Structure

```
mondabot-dashboard/
├── mondabot-dashboard/          # Next.js frontend app
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/projects/    # API proxy route
│   │   │   └── test-page/       # Test page for projects
│   │   ├── components/
│   │   │   └── ServerStatus.tsx # Connection status component
│   │   └── hooks/
│   │       ├── useProjects.ts   # Projects data hook
│   │       └── useSocket.ts     # WebSocket connection hook
├── server/                      # Express.js backend
│   ├── server.js               # Main server file
│   └── .env                    # Environment variables
├── scripts/
│   └── check-server.js         # Server health check script
└── package.json                # Root package.json with workspace scripts
```

## 🎯 API Endpoints

### Express Server (localhost:3001)
- `GET /health` - Health check
- `GET /api/projects` - Fetch projects from Airtable
- `GET /api/tasks` - Fetch tasks from Airtable
- `POST /api/webhooks/airtable-projects` - Airtable webhook for projects
- `POST /api/webhooks/airtable-update` - Airtable webhook for tasks

### Next.js API Routes (localhost:3000)
- `GET /api/projects` - Proxy to Express server

## 🚨 Security Notes

- Never commit your `.env` file
- Rotate your Airtable API keys regularly
- Use environment variables for all sensitive data
- CORS is configured for localhost development only

## 📊 Monitoring

The application includes built-in monitoring:
- **Connection Status**: Visual indicators in the UI
- **Error Reporting**: Detailed error messages
- **Health Checks**: Server status verification
- **Console Logging**: Detailed logs for debugging

## 🤝 Contributing

1. Make sure both servers are running
2. Test your changes on the test page: http://localhost:3000/test-page
3. Check console logs for any errors
4. Verify WebSocket connections are working

---

**Need help?** Check the browser console and Express server logs for detailed error messages. 