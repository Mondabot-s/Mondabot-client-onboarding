import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSocket } from './useSocket';

interface Task {
  id: string;
  title?: string;
  status?: 'pending' | 'in-progress' | 'completed';
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  // Add any other fields that might come from Airtable
  [key: string]: unknown;
}

interface UseTasksReturn {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  updateTaskStatus: (taskId: string, newStatus: 'pending' | 'in-progress' | 'completed') => void;
  socketConnected: boolean;
  socketError: string | null;
}

export const useTasks = (): UseTasksReturn => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize Socket.IO connection
  const { socket, connected: socketConnected, error: socketError } = useSocket();

  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching tasks from API...');
      
      const response = await axios.get('/api/tasks');
      console.log('Tasks fetched successfully:', response.data);
      
      setTasks(response.data);
    } catch (err: unknown) {
      console.error('Error fetching tasks:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch tasks';
      const apiError = axios.isAxiosError(err) ? err.response?.data?.message : null;
      setError(apiError || errorMessage);
      
      // Fallback to dummy data if API fails
      setTasks([
        { 
          id: '1', 
          title: 'Configuración de Twilio API', 
          status: 'completed', 
          description: 'Configuración de credenciales y números de teléfono' 
        },
        { 
          id: '2', 
          title: 'Integración con HubSpot', 
          status: 'in-progress', 
          description: 'Configuración de webhooks y sincronización de datos' 
        },
        { 
          id: '3', 
          title: 'Configuración de IA Voice', 
          status: 'pending', 
          description: 'Entrenamiento del modelo de reconocimiento de voz' 
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const updateTaskStatus = (taskId: string, newStatus: 'pending' | 'in-progress' | 'completed') => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // Listen for real-time task updates via Socket.IO
  useEffect(() => {
    if (socket) {
      const handleTaskUpdate = (updatedTask: Task) => {
        console.log('Received real-time task update:', updatedTask);
        setTasks(currentTasks => {
          const existingTaskIndex = currentTasks.findIndex(task => task.id === updatedTask.id);
          if (existingTaskIndex >= 0) {
            // Update existing task
            const newTasks = [...currentTasks];
            newTasks[existingTaskIndex] = { ...newTasks[existingTaskIndex], ...updatedTask };
            return newTasks;
          } else {
            // Add new task
            return [...currentTasks, updatedTask];
          }
        });
      };

      socket.on('task_updated', handleTaskUpdate);

      // Cleanup listener on unmount or socket change
      return () => {
        socket.off('task_updated', handleTaskUpdate);
      };
    }
  }, [socket]);

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    loading,
    error,
    refetch: fetchTasks,
    updateTaskStatus,
    socketConnected,
    socketError,
  };
}; 