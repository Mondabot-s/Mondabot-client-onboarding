"use client";

import React from 'react';
import { useProjects } from '@/hooks/useProjects';
import { ServerStatus } from '@/components/ServerStatus';
import { format, parseISO } from 'date-fns';

const TestPage: React.FC = () => {
  const { projects, loading, error, refetch, socketConnected } = useProjects();

  const getStatusStyles = (status: string) => {
    const styles = {
      Building: {
        bg: 'bg-orange-100',
        text: 'text-orange-800',
        border: 'border-orange-300'
      },
      Live: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        border: 'border-green-300'
      },
      Testing: {
        bg: 'bg-blue-100',
        text: 'text-blue-800',
        border: 'border-blue-300'
      }
    };
    return styles[status as keyof typeof styles] || styles.Building;
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        <ServerStatus />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-red-800 font-semibold mb-2">Error Loading Projects</h2>
          <div className="text-red-600 whitespace-pre-line">{error}</div>
          <button 
            onClick={refetch}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
        <ServerStatus />
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Projects Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${socketConnected ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm text-gray-600">
                {socketConnected ? 'Real-time sync active' : 'Disconnected'}
              </span>
            </div>
            <button 
              onClick={refetch}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const statusStyle = getStatusStyles(project.status);
            
            return (
              <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {project.projectId}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle.bg} ${statusStyle.text} border ${statusStyle.border}`}>
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500 mb-1">Deadline</p>
                      <p className="font-medium">
                        {project.deadline 
                          ? format(parseISO(project.deadline), 'MMM dd, yyyy')
                          : 'Not set'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Project Manager</p>
                      <p className="font-medium">
                        {project.assignedManager.length > 0 
                          ? project.assignedManager.join(', ')
                          : 'Unassigned'}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1">Tasks</p>
                      <p className="font-medium">
                        {project.tasks.length} tasks
                      </p>
                    </div>
                  </div>

                  {project.tasks.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-700 mb-2">Tasks:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tasks.map((task) => (
                          <span 
                            key={`${project.id}-${task.id}`} 
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            {task.taskId}: {task.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found</p>
          </div>
        )}
      </div>
      
      <ServerStatus />
    </div>
  );
};

export default TestPage; 