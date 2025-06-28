"use client";

import { useState } from 'react';
import Image from 'next/image';

const MondabotDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleReferralSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Referral submitted.');
        // Show notification logic would go here
        e.currentTarget.reset();
    };

    const GlobalStyles = () => (
        <style jsx global>{`
            :root {
                --theme-primary: #CC1075;
                --theme-bg-light: #FFF9F9;
                --theme-bg-dark: #000B33;
                --theme-text-light: #FFFFFF;
                --theme-text-dark: #000B33;
                --theme-text-muted: #4a5568;
                --font-family-sans: 'Inter', sans-serif;
            }

            body {
                font-family: var(--font-family-sans);
                background-color: var(--theme-bg-light);
            }

            .sidebar {
                background-color: var(--theme-bg-dark);
                color: var(--theme-text-light);
            }
            
            .sidebar-link {
                display: flex;
                align-items: center;
                padding: 0.85rem 1.5rem;
                color: #a0aec0;
                font-weight: 500;
                border-left: 3px solid transparent;
                transition: all 0.3s ease;
            }

            .sidebar-link:hover {
                background-color: rgba(255, 255, 255, 0.05);
                color: var(--theme-text-light);
            }

            .sidebar-link.active {
                background-color: rgba(204, 16, 117, 0.1);
                color: var(--theme-primary);
                border-left-color: var(--theme-primary);
            }

            .sidebar-link i {
                width: 20px;
                margin-right: 1rem;
                text-align: center;
            }

            .card {
                background-color: #ffffff;
                border-radius: 12px;
                padding: 1.5rem;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05);
                border: 1px solid #e2e8f0;
                transition: all 0.3s ease;
            }
            
            .card:hover {
                transform: translateY(-4px);
                box-shadow: 0 10px 15px -3px rgba(0,0,0,0.07), 0 4px 6px -4px rgba(0,0,0,0.07);
            }

            .card-header {
                font-size: 1.25rem;
                font-weight: 700;
                color: var(--theme-text-dark);
                margin-bottom: 0.5rem;
            }

            .tab-content {
                display: none;
            }

            .tab-content.active {
                display: block;
            }
            
            .btn-primary {
                background-color: var(--theme-primary);
                color: var(--theme-text-light);
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                font-weight: 600;
                transition: all 0.3s ease;
                box-shadow: 0 4px 14px 0 rgba(204, 16, 117, 0.39);
            }
            .btn-primary:hover {
                background-color: #b80e69;
                box-shadow: 0 6px 20px 0 rgba(204, 16, 117, 0.45);
            }

            .form-input {
                width: 100%;
                padding: 12px;
                border: 1px solid #cbd5e1;
                border-radius: 8px;
                font-size: 14px;
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
                background-color: #f8fafc;
            }

            .form-input:focus {
                outline: none;
                border-color: var(--theme-primary);
                box-shadow: 0 0 0 3px rgba(204, 16, 117, 0.2);
            }
            
            .status-badge {
                padding: 5px 12px;
                border-radius: 9999px;
                font-size: 0.75rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .status-live { background-color: #10b981; color: white; }
            .status-testing { background-color: #f59e0b; color: white; }
            .status-building { background-color: #3b82f6; color: white; }
            .status-review { background-color: #f59e0b; color: white; }
            .status-approved { background-color: #10b981; color: white; }
            .status-submitted { background-color: #8b5cf6; color: white; }
            .status-rewarded { background-color: #059669; color: white; }
            
            .kanban-column {
                background: #f8fafc;
                border-radius: 12px;
                padding: 16px;
                min-height: 400px;
                border: 1px solid #e2e8f0;
            }
            
            .task-card {
                background: white;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 12px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                border-left: 4px solid transparent;
                transition: all 0.2s ease;
                cursor: pointer;
            }
            .task-card:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            
            .task-priority-high { border-left-color: #ef4444; }
            .task-priority-medium { border-left-color: #f59e0b; }
            .task-priority-low { border-left-color: #10b981; }
        `}</style>
    );

    return (
        <div className="bg-theme-bg-light">
            <GlobalStyles />
            
            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className={`sidebar w-64 min-h-full flex-col fixed lg:relative lg:translate-x-0 transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    {/* Logo */}
                    <div className="px-6 py-6 border-b border-gray-700">
                        <h1 className="text-3xl font-bold text-white tracking-wider">Mondabot</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-grow pt-6">
                        <a href="#" className={`sidebar-link ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => handleTabClick('overview')}>
                            <i className="fas fa-tachometer-alt"></i>
                            <span>Overview</span>
                        </a>
                        <a href="#" className={`sidebar-link ${activeTab === 'automations' ? 'active' : ''}`} onClick={() => handleTabClick('automations')}>
                            <i className="fas fa-robot"></i>
                            <span>Automations</span>
                        </a>
                        <a href="#" className={`sidebar-link ${activeTab === 'updates' ? 'active' : ''}`} onClick={() => handleTabClick('updates')}>
                            <i className="fas fa-clock-rotate-left"></i>
                            <span>Updates</span>
                        </a>
                        <a href="#" className={`sidebar-link ${activeTab === 'tasks' ? 'active' : ''}`} onClick={() => handleTabClick('tasks')}>
                            <i className="fas fa-tasks"></i>
                            <span>Tasks</span>
                        </a>
                        <a href="#" className={`sidebar-link ${activeTab === 'referrals' ? 'active' : ''}`} onClick={() => handleTabClick('referrals')}>
                            <i className="fas fa-gift"></i>
                            <span>Refer & Win</span>
                        </a>
                    </nav>

                    {/* User Profile in Sidebar */}
                    <div className="px-6 py-4 mt-auto border-t border-gray-700">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center font-bold">SM</div>
                            <div className="ml-3">
                                <p className="text-sm font-semibold text-white">Sergio Martinez</p>
                                <a href="#" className="text-xs text-gray-400 hover:text-white">View Profile</a>
                            </div>
                        </div>
                    </div>
                </aside>
                
                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                    {/* Header */}
                    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
                        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                            {/* Mobile Menu Button */}
                            <button onClick={toggleSidebar} className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
                                <i className="fas fa-bars text-xl"></i>
                            </button>
                            <h2 className="text-xl font-bold" style={{color: 'var(--theme-text-dark)'}}>
                                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                            </h2>
                            {/* Search and Actions */}
                            <div className="flex items-center space-x-4">
                                <button className="text-gray-500 hover:text-gray-800">
                                    <i className="fas fa-search"></i>
                                </button>
                                <button className="text-gray-500 hover:text-gray-800">
                                    <i className="fas fa-bell"></i>
                                </button>
                                <button className="btn-primary hidden sm:block">
                                    <i className="fas fa-plus mr-2"></i>New Task
                                </button>
                            </div>
                        </div>
                    </header>

                    <main className="flex-1 p-4 sm:p-6 lg:p-8">
                        {/* Overview Tab */}
                        <div id="overview" className={`tab-content ${activeTab === 'overview' ? 'active' : ''}`}>
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                                {/* Left column */}
                                <div className="xl:col-span-2 space-y-4">
                                    {/* Welcome Video */}
                                    <div className="card p-2">
                                        <h3 className="card-header mb-2">Welcome to your Dashboard!</h3>
                                        <div className="relative w-full max-w-2xl mx-auto" style={{paddingBottom: '56.25%'}}>
                                            <iframe 
                                                src="https://player.vimeo.com/video/1068762817?h=1234567890abcdef&title=0&byline=0&portrait=0" 
                                                frameBorder="0" 
                                                allow="autoplay; fullscreen; picture-in-picture" 
                                                allowFullScreen
                                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                            ></iframe>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">A personal message from our CEO explaining the automation process.</p>
                                    </div>

                                    {/* Action Required Alert */}
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 card !shadow-none !border-yellow-200">
                                        <div className="flex items-start">
                                            <i className="fas fa-exclamation-triangle text-yellow-500 text-lg mr-3"></i>
                                            <div>
                                                <h4 className="font-bold text-yellow-800 text-sm">Action Required</h4>
                                                <p className="text-yellow-700 mt-1 mb-2 text-sm">We need your feedback on the WhatsApp bot conversation flows before we can proceed to launch.</p>
                                                <button className="bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-lg hover:bg-yellow-500 transition-colors font-semibold text-xs">
                                                    <i className="fas fa-comment-dots mr-1"></i>Provide Feedback
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Stats - Reduced spacing */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-2">
                                        <div className="card flex items-center p-3">
                                            <div className="p-2 rounded-full bg-blue-100"><i className="fas fa-rocket text-lg text-blue-600"></i></div>
                                            <div className="ml-3">
                                                <p className="text-xl font-bold" style={{color:'var(--theme-text-dark)'}}>4</p>
                                                <p className="text-gray-500 text-sm">Automations</p>
                                            </div>
                                        </div>
                                        <div className="card flex items-center p-3">
                                            <div className="p-2 rounded-full bg-green-100"><i className="fas fa-check-circle text-lg text-green-600"></i></div>
                                            <div className="ml-3">
                                                <p className="text-xl font-bold" style={{color:'var(--theme-text-dark)'}}>12</p>
                                                <p className="text-gray-500 text-sm">Tasks Done</p>
                                            </div>
                                        </div>
                                        <div className="card flex items-center p-3">
                                            <div className="p-2 rounded-full bg-purple-100"><i className="fas fa-plug text-lg text-purple-600"></i></div>
                                            <div className="ml-3">
                                                <p className="text-xl font-bold" style={{color:'var(--theme-text-dark)'}}>8</p>
                                                <p className="text-gray-500 text-sm">Integrations</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Column */}
                                <div className="space-y-6">
                                    {/* Project Manager */}
                                    <div className="card">
                                        <h3 className="card-header mb-4">Your Project Manager</h3>
                                        <div className="flex flex-col items-center text-center">
                                            <Image 
                                                src="/Sergio_Bernal.jpg" 
                                                alt="Sergio Bernal" 
                                                width={96} 
                                                height={96} 
                                                className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-offset-2 ring-pink-200"
                                            />
                                            <h4 className="text-xl font-bold" style={{color:'var(--theme-text-dark)'}}>Sergio Bernal</h4>
                                            <p className="text-gray-500 mb-4">CEO & Lead Strategist</p>
                                            <div className="space-y-3 w-full text-left">
                                                <a href="mailto:sergio@mondabot.com" className="flex items-center text-gray-700 hover:text-pink-600"><i className="fa-solid fa-envelope w-6 text-center text-gray-400 mr-2"></i> sergio@mondabot.com</a>
                                                <a href="tel:+34634800790" className="flex items-center text-gray-700 hover:text-pink-600"><i className="fa-solid fa-phone w-6 text-center text-gray-400 mr-2"></i> +34 634 800 790</a>
                                                <a href="https://www.linkedin.com/in/sergio-bernal-300816206/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-pink-600"><i className="fa-brands fa-whatsapp w-6 text-center text-gray-400 mr-2"></i> WhatsApp Message</a>
                                            </div>
                                            <a href="https://calendly.com/mondabot/30min?month=2025-06" target="_blank" rel="noopener noreferrer" className="btn-primary w-full mt-6"><i className="fas fa-calendar-alt mr-2"></i>Schedule a Call</a>
                                        </div>
                                    </div>
                                    {/* Next Milestone */}
                                    <div className="card">
                                        <h3 className="card-header mb-4">Next Milestone</h3>
                                        <div className="text-center">
                                            <p className="text-4xl font-bold" style={{color:'var(--theme-primary)'}}>July 1st</p>
                                            <p className="text-gray-500 mb-3">in 3 days</p>
                                            <p className="font-semibold text-lg" style={{color:'var(--theme-text-dark)'}}>Launch WhatsApp Support Bot</p>
                                            <p className="text-gray-600 text-sm">Automated customer support with AI-powered responses.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Automations Tab */}
                        <div id="automations" className={`tab-content ${activeTab === 'automations' ? 'active' : ''}`}>
                            <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--theme-text-dark)'}}>Active Automations</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="card border-l-4 border-green-500">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg" style={{color: 'var(--theme-text-dark)'}}>Lead Qualification Bot</h3>
                                        <span className="status-badge status-live">Live</span>
                                    </div>
                                    <p className="text-gray-600 my-2">Qualifies leads from web forms and routes them to sales reps.</p>
                                    <p className="text-sm text-gray-500">Processed 47 leads today</p>
                                </div>
                                <div className="card border-l-4 border-yellow-500">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg" style={{color: 'var(--theme-text-dark)'}}>WhatsApp Support Bot</h3>
                                        <span className="status-badge status-testing">Testing</span>
                                    </div>
                                    <p className="text-gray-600 my-2">Handles common customer queries via WhatsApp.</p>
                                    <p className="text-sm text-gray-500">Last updated: 2 hours ago</p>
                                </div>
                                <div className="card border-l-4 border-blue-500">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg" style={{color: 'var(--theme-text-dark)'}}>Email Follow-up Sequences</h3>
                                        <span className="status-badge status-live">Live</span>
                                    </div>
                                    <p className="text-gray-600 my-2">Personalized email sequences based on customer behavior.</p>
                                    <p className="text-sm text-gray-500">23% open rate this week</p>
                                </div>
                                <div className="card border-l-4 border-purple-500">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg" style={{color: 'var(--theme-text-dark)'}}>CRM Data Sync</h3>
                                        <span className="status-badge status-building">Building</span>
                                    </div>
                                    <p className="text-gray-600 my-2">Synchronizes customer data across all platforms.</p>
                                    <p className="text-sm text-gray-500">ETA: July 15th</p>
                                </div>
                            </div>
                        </div>

                        {/* Updates Tab */}
                        <div id="updates" className={`tab-content ${activeTab === 'updates' ? 'active' : ''}`}>
                            <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--theme-text-dark)'}}>Project Timeline</h2>
                            <div className="space-y-6">
                                <div className="card border-l-4 border-yellow-400">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg" style={{color: 'var(--theme-text-dark)'}}>WhatsApp Bot Testing Phase Complete</h3>
                                        <span className="text-sm text-gray-500">2 hours ago</span>
                                    </div>
                                    <p className="text-gray-600 mb-3">Successfully completed initial testing of the WhatsApp support bot. Ready for your feedback review before launch.</p>
                                    <div className="flex items-center space-x-2">
                                        <span className="status-badge status-review">NEEDS REVIEW</span>
                                        <button className="text-pink-600 hover:text-pink-800 text-sm font-medium">Provide Feedback</button>
                                    </div>
                                </div>
                                <div className="card border-l-4 border-green-400">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg" style={{color: 'var(--theme-text-dark)'}}>Lead Qualification Bot Performance Report</h3>
                                        <span className="text-sm text-gray-500">1 day ago</span>
                                    </div>
                                    <p className="text-gray-600 mb-3">Monthly performance report shows 34% increase in qualified leads and 28% reduction in response time.</p>
                                    <div className="flex items-center space-x-2">
                                        <span className="status-badge status-approved">APPROVED</span>
                                        <button className="text-pink-600 hover:text-pink-800 text-sm font-medium">View Report</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tasks Tab - Kanban Board */}
                        <div id="tasks" className={`tab-content ${activeTab === 'tasks' ? 'active' : ''}`}>
                            <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--theme-text-dark)'}}>Project Tasks</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* TO DO Column */}
                                <div className="kanban-column">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-semibold text-lg" style={{color:'var(--theme-text-dark)'}}>To Do</h3>
                                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm font-medium">3</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="task-card task-priority-high">
                                            <h4 className="font-medium">Review WhatsApp Bot Flows</h4>
                                            <p className="text-sm text-gray-500 mt-1">Provide feedback on conversation flows.</p>
                                            <div className="text-xs text-gray-500 mt-3">Due: Tomorrow</div>
                                        </div>
                                        <div className="task-card task-priority-medium">
                                            <h4 className="font-medium">CRM Integration Testing</h4>
                                            <p className="text-sm text-gray-500 mt-1">Test data synchronization between platforms.</p>
                                            <div className="text-xs text-gray-500 mt-3">Due: July 5th</div>
                                        </div>
                                        <div className="task-card task-priority-low">
                                            <h4 className="font-medium">Documentation Update</h4>
                                            <p className="text-sm text-gray-500 mt-1">Update user documentation for new features.</p>
                                            <div className="text-xs text-gray-500 mt-3">Due: July 10th</div>
                                        </div>
                                    </div>
                                </div>
                                {/* IN PROGRESS Column */}
                                <div className="kanban-column">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-semibold text-lg" style={{color:'var(--theme-text-dark)'}}>In Progress</h3>
                                        <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">2</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="task-card task-priority-high">
                                            <h4 className="font-medium">WhatsApp Bot Development</h4>
                                            <p className="text-sm text-gray-500 mt-1">Finalizing bot responses and testing edge cases.</p>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                                <div className="bg-blue-600 h-1.5 rounded-full" style={{width: "85%"}}></div>
                                            </div>
                                            <div className="text-xs text-gray-500 mt-3">Due: June 30th</div>
                                        </div>
                                        <div className="task-card task-priority-medium">
                                            <h4 className="font-medium">Email Template Design</h4>
                                            <p className="text-sm text-gray-500 mt-1">Create new responsive templates.</p>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                                <div className="bg-blue-600 h-1.5 rounded-full" style={{width: "60%"}}></div>
                                            </div>
                                            <div className="text-xs text-gray-500 mt-3">Due: July 8th</div>
                                        </div>
                                    </div>
                                </div>
                                {/* DONE Column */}
                                <div className="kanban-column">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="font-semibold text-lg" style={{color:'var(--theme-text-dark)'}}>Done</h3>
                                        <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm font-medium">4</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="task-card task-priority-low opacity-70">
                                            <h4 className="font-medium line-through">Security Audit</h4>
                                            <p className="text-sm text-gray-500 mt-1">Completed comprehensive assessment.</p>
                                            <div className="text-xs text-green-600 mt-3 font-semibold">Completed: June 12th</div>
                                        </div>
                                        <div className="task-card task-priority-medium opacity-70">
                                            <h4 className="font-medium line-through">API Integration Setup</h4>
                                            <p className="text-sm text-gray-500 mt-1">Connected CRM with all external platforms.</p>
                                            <div className="text-xs text-green-600 mt-3 font-semibold">Completed: June 18th</div>
                                        </div>
                                        <div className="task-card task-priority-high opacity-70">
                                            <h4 className="font-medium line-through">Lead Scoring Algorithm</h4>
                                            <p className="text-sm text-gray-500 mt-1">Implemented ML-based lead scoring system.</p>
                                            <div className="text-xs text-green-600 mt-3 font-semibold">Completed: June 20th</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Refer & Win Tab */}
                        <div id="referrals" className={`tab-content ${activeTab === 'referrals' ? 'active' : ''}`}>
                            <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--theme-text-dark)'}}>Refer & Win Program</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="card">
                                    <h3 className="card-header mb-4">Refer a Business</h3>
                                    <form onSubmit={handleReferralSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Referral Name</label>
                                            <input type="text" id="refereeName" className="form-input" placeholder="Full name" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                            <input type="email" id="refereeEmail" className="form-input" placeholder="email@company.com" required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input type="tel" id="refereePhone" className="form-input" placeholder="+1 (555) 000-0000" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                                            <input type="text" id="refereeCompany" className="form-input" placeholder="Company Inc." required />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                                            <select id="businessType" className="form-input" required>
                                                <option value="">Select business type</option>
                                                <option value="ecommerce">E-commerce</option>
                                                <option value="saas">SaaS</option>
                                                <option value="consulting">Consulting</option>
                                                <option value="healthcare">Healthcare</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                                            <textarea id="refereeNotes" className="form-input" rows={3} placeholder="Tell us about their automation needs..."></textarea>
                                        </div>
                                        <button type="submit" className="btn-primary w-full !mt-6">
                                            <i className="fas fa-paper-plane mr-2"></i>Submit Referral
                                        </button>
                                    </form>
                                </div>
                                <div className="card">
                                    <h3 className="card-header mb-4">Your Referrals</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                            <div>
                                                <div className="font-medium">TechCorp Solutions</div>
                                                <div className="text-sm text-gray-500">Referred: May 15th</div>
                                            </div>
                                            <span className="status-badge status-submitted">SUBMITTED</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                            <div>
                                                <div className="font-medium">Digital Marketing Pro</div>
                                                <div className="text-sm text-gray-500">Referred: June 2nd</div>
                                            </div>
                                            <span className="status-badge status-rewarded">REWARDED</span>
                                        </div>
                                        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                            <div>
                                                <div className="font-medium">StartupXYZ</div>
                                                <div className="text-sm text-gray-500">Referred: June 10th</div>
                                            </div>
                                            <span className="status-badge status-review">IN REVIEW</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" 
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default MondabotDashboard; 