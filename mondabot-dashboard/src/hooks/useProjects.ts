"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSocket } from './useSocket';
import { Project } from '@/types/airtable';

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  socketConnected: boolean;
}

export const useProjects = (): UseProjectsReturn => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { socket, connected: socketConnected } = useSocket();

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching projects from API...');
      
      const response = await axios.get<Project[]>('/api/projects');
      console.log('Projects fetched successfully:', response.data);
      
      setProjects(response.data);
    } catch (err: unknown) {
      console.error('Error fetching projects:', err);
      
      let errorMessage = 'Failed to fetch projects';
      
      if (axios.isAxiosError(err)) {
        if (err.response) {
          // Server responded with error
          const responseData = err.response.data;
          errorMessage = responseData?.message || `Request failed with status code ${err.response.status}`;
          
          if (err.response.status === 503) {
            errorMessage = responseData?.message || 'Backend server is not running. Please start the Express server on port 3001.';
            if (responseData?.instructions) {
              errorMessage += `\n\nInstructions: ${responseData.instructions}`;
            }
          } else if (err.response.status === 500) {
            errorMessage = responseData?.message || 'Internal server error occurred.';
          }
        } else if (err.request) {
          // Request made but no response
          errorMessage = 'No response from server. Please check your connection and ensure the Next.js server is running.';
        } else {
          // Other axios errors
          errorMessage = err.message;
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (socket && socketConnected) {
      const handleProjectUpdate = (data: unknown) => {
        console.log('Received project update via WebSocket:', data);
        // Refetch projects when update is received
        fetchProjects();
      };

      socket.on('projects_updated', handleProjectUpdate);

      return () => {
        socket.off('projects_updated', handleProjectUpdate);
      };
    }
  }, [socket, socketConnected]);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
    socketConnected,
  };
}; 