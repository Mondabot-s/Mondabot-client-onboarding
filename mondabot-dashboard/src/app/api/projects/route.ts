import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Use environment variable for server URL, fallback to localhost for development
    const serverUrl = process.env.EXPRESS_SERVER_URL || 'http://localhost:3001';
    const apiUrl = `${serverUrl}/api/projects`;
    
    console.log(`Proxying request to Express server at: ${apiUrl}`);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Don't cache failed requests
      cache: 'no-store'
    });
    
    const data = await response.json();
    
    // Forward the exact status from Express
    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }
    
    console.log(`Successfully proxied ${data.length} projects from Express server`);
    return NextResponse.json(data);
    
  } catch (error: unknown) {
    console.error('Proxy error:', error);
    
    // Express server is not running or not accessible
    return NextResponse.json(
      {
        error: 'Backend server unavailable',
        message: 'Cannot connect to Express server',
        help: 'Please ensure the Express server is running and accessible',
        instructions: [
          'For local development: Run "npm run server" or "node server/server.js"',
          'For production: Set EXPRESS_SERVER_URL environment variable',
          'Check if the server is accessible from this environment'
        ],
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 503 }
    );
  }
} 