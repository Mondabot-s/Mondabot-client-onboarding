"use client";

import React, { useEffect, useState } from 'react';
import { useSocket } from '@/hooks/useSocket';

interface ServerStatusProps {
  className?: string;
}

export const ServerStatus: React.FC<ServerStatusProps> = ({ className = '' }) => {
  const [apiStatus, setApiStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const { connected: socketConnected, error: socketError } = useSocket();

  useEffect(() => {
    const checkApiServer = async () => {
      try {
        const response = await fetch('/api/projects');
        setApiStatus(response.ok ? 'online' : 'offline');
      } catch (error) {
        console.error('API health check failed:', error);
        setApiStatus('offline');
      }
    };

    checkApiServer();
    const interval = setInterval(checkApiServer, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      default: return 'bg-yellow-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'offline': return 'Offline';
      default: return 'Checking...';
    }
  };

  if (apiStatus === 'offline' || !socketConnected) {
    return (
      <div className={`fixed bottom-4 right-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg shadow-lg max-w-md ${className}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium">Server Connection Issues</h3>
            <div className="mt-1 text-sm">
              <p>• API Server: <span className="font-medium">{getStatusText(apiStatus)}</span></p>
              <p>• WebSocket: <span className="font-medium">{socketConnected ? 'Connected' : 'Disconnected'}</span></p>
              {socketError && (
                <p className="mt-1 text-xs text-red-600">{socketError}</p>
              )}
            </div>
            <div className="mt-2 text-xs">
              <p>Please ensure the Express server is running:</p>
              <code className="bg-red-100 px-1 rounded">npm run server</code>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 bg-green-50 border border-green-200 text-green-800 px-3 py-2 rounded-lg shadow-md ${className}`}>
      <div className="flex items-center text-sm">
        <div className={`w-2 h-2 rounded-full mr-2 ${getStatusColor(apiStatus)}`}></div>
        <span>All systems operational</span>
      </div>
    </div>
  );
}; 