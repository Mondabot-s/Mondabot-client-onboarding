"use client";

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface UseSocketReturn {
  socket: Socket | null;
  connected: boolean;
  error: string | null;
}

// Function to get the correct socket URL based on environment
const getSocketUrl = (): string => {
  // In production (deployed), use the same origin as the current page
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    return window.location.origin;
  }
  
  // In development, use localhost:3001
  return 'http://localhost:3001';
};

export const useSocket = (url?: string): UseSocketReturn => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const socketUrl = url || getSocketUrl();
    console.log('Connecting to Socket.IO server at:', socketUrl);
    
    const socketConnection = io(socketUrl, {
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
        errorMessage = 'Cannot connect to server. Please check your connection.';
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