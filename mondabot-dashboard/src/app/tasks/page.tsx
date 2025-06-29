"use client";

export default function TasksPage() {
    return (
        <div id="tasks" className="tab-content">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-dark mb-4">Project Tasks</h2>
                <p className="text-gray-600">Track progress and manage project deliverables</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="kanban-column">
                    <div className="kanban-header">
                        <h3 className="text-lg font-semibold text-dark">TO DO</h3>
                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-medium">3</span>
                    </div>
                    <div className="space-y-3">
                        <div className="task-card task-priority-high">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">Review WhatsApp Bot Flows</h4>
                                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">High</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Provide feedback on conversation flows and response templates</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Due: Tomorrow</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>You</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="task-card task-priority-medium">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">CRM Integration Testing</h4>
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Test data synchronization between platforms</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Due: July 5th</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>Sergio</span>
                                </div>
                            </div>
                        </div>

                        <div className="task-card task-priority-low">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">Documentation Update</h4>
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Low</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Update user documentation for new features</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Due: July 10th</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="kanban-column">
                    <div className="kanban-header">
                        <h3 className="text-lg font-semibold text-dark">IN PROGRESS</h3>
                        <span className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-sm font-medium">2</span>
                    </div>
                    <div className="space-y-3">
                        <div className="task-card task-priority-high border-l-blue-500">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">WhatsApp Bot Development</h4>
                                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">High</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Finalizing bot responses and testing edge cases</p>
                            <div className="mb-3">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                                </div>
                                <span className="text-xs text-gray-500 mt-1">85% complete</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Due: June 30th</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>Dev Team</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="task-card task-priority-medium border-l-blue-500">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">Email Template Design</h4>
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Creating responsive email templates for campaigns</p>
                            <div className="mb-3">
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
                                </div>
                                <span className="text-xs text-gray-500 mt-1">60% complete</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Due: July 8th</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>Design Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="kanban-column">
                    <div className="kanban-header">
                        <h3 className="text-lg font-semibold text-dark">DONE</h3>
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-sm font-medium">4</span>
                    </div>
                    <div className="space-y-3">
                        <div className="task-card task-priority-high border-l-green-500">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">Lead Scoring Algorithm</h4>
                                <i className="fas fa-check-circle text-green-600"></i>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Implemented ML-based lead scoring system</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Completed: June 20th</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>Dev Team</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="task-card task-priority-medium border-l-green-500">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">API Integration Setup</h4>
                                <i className="fas fa-check-circle text-green-600"></i>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Connected CRM with all external platforms</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Completed: June 18th</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>Sergio</span>
                                </div>
                            </div>
                        </div>

                        <div className="task-card task-priority-low border-l-green-500">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">Database Optimization</h4>
                                <i className="fas fa-check-circle text-green-600"></i>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Optimized database queries for better performance</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Completed: June 15th</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>Backend Team</span>
                                </div>
                            </div>
                        </div>

                        <div className="task-card task-priority-medium border-l-green-500">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-dark">Security Audit</h4>
                                <i className="fas fa-check-circle text-green-600"></i>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">Completed comprehensive security assessment</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span>Completed: June 12th</span>
                                <div className="flex items-center">
                                    <i className="fas fa-user-circle mr-1"></i>
                                    <span>Security Team</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 