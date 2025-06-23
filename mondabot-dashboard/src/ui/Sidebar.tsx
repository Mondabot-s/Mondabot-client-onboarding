"use client";

import { useState } from 'react';

interface SidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const Sidebar = ({ activeTab = 'overview', onTabChange }: SidebarProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleSidebar} 
        className="lg:hidden fixed top-4 left-4 z-50 text-gray-500 hover:text-gray-700 focus:outline-none bg-white p-2 rounded-md shadow-md"
      >
        <i className="fas fa-bars text-xl"></i>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar w-64 min-h-full flex-col fixed lg:relative lg:translate-x-0 transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
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

      {/* Overlay for mobile menu */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" 
          onClick={toggleSidebar}
        ></div>
      )}

      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default Sidebar; 