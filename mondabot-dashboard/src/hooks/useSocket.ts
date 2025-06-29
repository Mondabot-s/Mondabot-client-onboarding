"use client";

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface UseSocketReturn {
  socket: Socket | null;
  connected: boolean;
  error: string | null;
}

export const useSocket = (url: string = 'http://localhost:3001'): UseSocketReturn => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('Connecting to Socket.IO server...');
    
    const socketConnection = io(url, {
      transports: ['polling', 'websocket'], // Start with polling, then upgrade to websocket
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 10000,
    });

    socketConnection.on('connect', () => {
      console.log('Connected to WebSocket server:', socketConnection.id);
      setConnected(true);
      setError(null);
    });

    socketConnection.on('connect_error', (err) => {
      console.error('Socket.IO connection error:', err);
      let errorMessage: string;
      
      if (err.message === 'xhr poll error' || err.message.includes('ECONNREFUSED')) {
        errorMessage = 'Cannot connect to server. Please ensure Express server is running on port 3001.';
      } else if (err.message.includes('timeout')) {
        errorMessage = 'Connection timeout. Server may be overloaded.';
      } else {
        errorMessage = `Connection failed: ${err.message}`;
      }
      
      setError(errorMessage);
      setConnected(false);
    });

    socketConnection.on('disconnect', (reason) => {
      console.log('Disconnected from WebSocket server:', reason);
      setConnected(false);
      
      if (reason === 'io server disconnect') {
        setError('Server disconnected the connection');
      } else if (reason === 'transport close') {
        // This is usually temporary, don't show error
        setError(null);
      }
    });

    socketConnection.on('reconnect', (attemptNumber) => {
      console.log('Reconnected after', attemptNumber, 'attempts');
      setConnected(true);
      setError(null);
    });

    socketConnection.on('reconnect_failed', () => {
      console.error('Failed to reconnect to WebSocket server');
      setError('Failed to reconnect after multiple attempts');
    });

    setSocket(socketConnection);

    // Cleanup on unmount
    return () => {
      console.log('Cleaning up Socket.IO connection');
      socketConnection.disconnect();
    };
  }, [url]);

  return {
    socket,
    connected,
    error,
  };
}; 