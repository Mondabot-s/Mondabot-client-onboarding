"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// This Sidebar component is completely self-contained and styles itself with inline styles,
// so it does not rely on Tailwind or any external CSS frameworks.
export default function Sidebar() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  /** Base link style */
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: '8px',
    color: '#9CA3AF', // Gray text for inactive link
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    fontSize: '14px',
  };

  /** Active link style */
  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#CD1174', // Pink background for active link
    color: 'white',
  };

  /** Improved active state logic */
  const isActive = (href) => {
    // Normalize paths by removing trailing slashes
    const currentPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const linkPath = href === '/' ? '/' : href.replace(/\/$/, '');
    
    // For exact matching
    return currentPath === linkPath;
  };

  /** Hover link style with improved active state detection */
  const getHoverStyle = (href) => {
    if (isActive(href)) return activeLinkStyle;
    if (hoveredItem === href) {
      return {
        ...linkStyle,
        backgroundColor: 'rgba(205, 17, 116, 0.1)',
        color: '#CD1174',
      };
    }
    return linkStyle;
  };

  // Sidebar navigation items with FontAwesome icons
  const navItems = [
    { href: '/', label: 'Overview', icon: 'fas fa-tachometer-alt' },
    { href: '/automations', label: 'Automations', icon: 'fas fa-robot' },
    { href: '/updates', label: 'Updates', icon: 'fas fa-clock' },
    { href: '/tasks', label: 'Tasks', icon: 'fas fa-tasks' },
    { href: '/referrals', label: 'Refer & Win', icon: 'fas fa-gift' },
    { href: '/test-page', label: 'Test Page', icon: 'fas fa-flask' },
  ];

  return (
    <aside
      style={{
        width: '280px',
        minHeight: '100vh',
        backgroundColor: '#170E3B', // Dark purple background
        padding: '24px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        {/* Brand */}
        <div style={{ marginBottom: '40px' }}>
          <h1
            style={{
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textAlign: 'left',
              margin: 0,
            }}
          >
            Mondabot
          </h1>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              style={getHoverStyle(href)}
              onMouseEnter={() => setHoveredItem(href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <i className={icon} style={{ marginRight: '12px', fontSize: '16px', width: '20px', textAlign: 'center' }}></i>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* User Profile Section */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#CD1174',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            SM
          </div>
          <div>
            <div style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>
              Sergio Martinez
            </div>
            <div style={{ color: '#9CA3AF', fontSize: '12px', cursor: 'pointer' }}>
              View Profile
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
} 