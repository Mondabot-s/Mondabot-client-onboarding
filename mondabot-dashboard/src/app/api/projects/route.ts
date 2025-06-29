import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('Proxying request to Express server...');
    
    const response = await fetch('http://localhost:3001/api/projects', {
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
    
  } catch (error: any) {
    console.error('Proxy error:', error);
    
    // Express server is not running
    return NextResponse.json(
      {
        error: 'Backend server unavailable',
        message: 'Cannot connect to Express server on port 3001',
        help: 'Please ensure the Express server is running: npm run server',
        instructions: [
          'Run "npm run server" or "node server/server.js" to start the Express server.',
          'Check if port 3001 is available',
          'Verify server console for startup errors'
        ],
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 503 }
    );
  }
} 