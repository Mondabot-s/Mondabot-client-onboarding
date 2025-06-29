import useSWR from 'swr';

// The fetcher function for SWR
const fetcher = url => fetch(url).then(res => res.json());

export default function TestPage() {
  const { data: projects, error } = useSWR('/api/projects', fetcher, {
    // This will automatically re-fetch the data every 5 seconds
    refreshInterval: 5000
  });

  if (error) return <div>Failed to load projects. Check the API route.</div>;
  if (!projects) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Test Page - Projects Data</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Projects from Airtable</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div key={project.id || index} className="border-b pb-4 last:border-b-0">
              <h3 className="font-medium text-lg">{project.Name || 'Unnamed Project'}</h3>
              <div className="text-sm text-gray-600 mt-2">
                <p><strong>Status:</strong> {project.Status || 'N/A'}</p>
                <p><strong>Priority:</strong> {project.Priority || 'N/A'}</p>
                <p><strong>Due Date:</strong> {project['Due Date'] || 'N/A'}</p>
                {project.Description && (
                  <p><strong>Description:</strong> {project.Description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Data refreshes every 5 seconds automatically
        </div>
      </div>
    </div>
  );
} 