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
      transports: ['websocket', 'polling'],
      timeout: 5000,
    });

    socketConnection.on('connect', () => {
      console.log('Connected to WebSocket server:', socketConnection.id);
      setConnected(true);
      setError(null);
    });

    socketConnection.on('connect_error', (err) => {
      console.error('Socket.IO connection error:', err);
      setError(`Connection failed: ${err.message}`);
      setConnected(false);
    });

    socketConnection.on('disconnect', (reason) => {
      console.log('Disconnected from WebSocket server:', reason);
      setConnected(false);
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