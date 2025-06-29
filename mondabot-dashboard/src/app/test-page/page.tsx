"use client";

import useSWR from 'swr';

// The fetcher function for SWR
const fetcher = (url: string) => fetch(url).then(res => res.json());

interface Project {
  id: string;
  name: string;
  status: string;
  description: string;
}

export default function TestPage() {
  const { data: projects, error } = useSWR<Project[]>('/api/projects', fetcher, {
    // This will automatically re-fetch the data every 5 seconds
    refreshInterval: 5000
  });

  if (error) return <div className="p-8 text-red-600">Failed to load projects. Check the API route.</div>;
  if (!projects) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Test Page - Airtable Projects</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-gray-800">{project.name || 'Untitled Project'}</h2>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium">Status:</span> {project.status || 'No status'}
            </p>
            <p className="text-gray-700 mt-2">{project.description || 'No description available'}</p>
          </div>
        ))}
      </div>
      {projects.length === 0 && (
        <p className="text-gray-600">No projects found in your Airtable base.</p>
      )}
    </div>
  );
} 