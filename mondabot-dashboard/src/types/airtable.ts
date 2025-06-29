export interface AirtableProject {
  id: string;
  fields: {
    'Project ID': string;
    'Project Name': string;
    'Status': 'Building' | 'Live' | 'Testing';
    'ID': number;
    'Deadline': string;
    'Manager (from Assigned Manager)'?: string[];
    'Tasks'?: string[];
  }
}

export interface Project {
  id: string;
  projectId: string;
  name: string;
  status: 'Building' | 'Live' | 'Testing';
  deadline: string | null;
  assignedManager: string[];
  tasks: Task[];
}

export interface Task {
  id: string;
  taskId: string;
  name: string;
}

export interface AirtableTask {
  id: string;
  fields: {
    'Calculation': string;
    'Task Name': string;
    'ID': number;
    'Projects'?: string[];
  }
} 