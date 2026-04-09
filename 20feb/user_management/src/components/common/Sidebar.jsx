import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import Avatar from './Avatar';

const Sidebar = ({ activePage, onPageChange }) => {
  const { theme, themeName, changeTheme, sidebarCollapsed, toggleSidebar, themes } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', color: theme.primary },
    { id: 'users', label: 'Users', icon: '👥', color: theme.secondary },
    { id: 'analytics', label: 'Analytics', icon: '📈', color: '#f59e0b' },
    { id: 'reports', label: 'Reports', icon: '📋', color: '#10b981' },
    { id: 'settings', label: 'Settings', icon: '⚙️', color: '#8b5cf6' },
  ];

  const sidebarStyles = {
    container: {
      width: sidebarCollapsed ? '80px' : '280px',
      height: '100vh',
      background: theme.bgSecondary,
      borderRight: `1px solid ${theme.borderColor}`,
      position: 'fixed',
      left: 0,
      top: 0,
      transition: 'width 0.3s ease',
      overflow: 'hidden',
      zIndex: 1000,
      boxShadow: sidebarCollapsed ? 'none' : '4px 0 20px rgba(0,0,0,0.2)',
    },
    header: {
      padding: sidebarCollapsed ? '20px 0' : '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: sidebarCollapsed ? 'center' : 'space-between',
      borderBottom: `1px solid ${theme.borderColor}`,
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
    },
    logoText: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: theme.textPrimary,
      whiteSpace: 'nowrap',
    },
    toggleBtn: {
      width: '32px',
      height: '32px',
      borderRadius: '8px',
      border: `1px solid ${theme.borderColor}`,
      background: 'transparent',
      color: theme.textSecondary,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
    },
    menu: {
      padding: sidebarCollapsed ? '16px 0' : '16px 12px',
    },
    menuItem: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: sidebarCollapsed ? '12px 0' : '12px 16px',
      margin: '4px 0',
      borderRadius: '10px',
      background: isActive ? `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` : 'transparent',
      color: isActive ? 'white' : theme.textSecondary,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      justifyContent: sidebarCollapsed ? 'center' : 'flex-start',
      position: 'relative',
      overflow: 'hidden',
    }),
    menuIcon: {
      fontSize: '20px',
      minWidth: '24px',
      textAlign: 'center',
    },
    menuLabel: {
      fontSize: '14px',
      fontWeight: 500,
      whiteSpace: 'nowrap',
    },
    themeSection: {
      position: 'absolute',
      bottom: '20px',
      left: 0,
      right: 0,
      padding: sidebarCollapsed ? '0' : '0 12px',
    },
    themeButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: sidebarCollapsed ? '12px 0' : '12px 16px',
      margin: '4px 12px',
      borderRadius: '10px',
      background: theme.bgTertiary,
      color: theme.textSecondary,
      cursor: 'pointer',
      justifyContent: sidebarCollapsed ? 'center' : 'flex-start',
      border: `1px solid ${theme.borderColor}`,
    },
    themeMenu: {
      position: 'absolute',
      bottom: '80px',
      left: sidebarCollapsed ? '90px' : '20px',
      background: theme.bgSecondary,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '10px',
      padding: '8px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      minWidth: '150px',
    },
    themeOption: (themeName) => ({
      padding: '8px 12px',
      borderRadius: '6px',
      cursor: 'pointer',
      color: theme.textPrimary,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: themeName === 'dark' ? '#060714' : 
                  themeName === 'light' ? '#f8fafc' :
                  themeName === 'purple' ? '#1e1b4b' :
                  themeName === 'blue' ? '#0c4a6e' : '#064e3b',
      border: `1px solid ${theme.borderColor}`,
      marginBottom: '4px',
    }),
    userProfile: {
      position: 'absolute',
      bottom: '100px',
      left: 0,
      right: 0,
      padding: sidebarCollapsed ? '0' : '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderTop: `1px solid ${theme.borderColor}`,
    },
  };

  return (
    <div style={sidebarStyles.container}>
      {/* Header */}
      <div style={sidebarStyles.header}>
        {!sidebarCollapsed && (
          <div style={sidebarStyles.logo}>
            <div style={sidebarStyles.logoIcon}>U</div>
            <span style={sidebarStyles.logoText}>UserHub</span>
          </div>
        )}
        {sidebarCollapsed && <div style={sidebarStyles.logoIcon}>U</div>}
        <button 
          style={sidebarStyles.toggleBtn}
          onClick={toggleSidebar}
          onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHover}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          {sidebarCollapsed ? '→' : '←'}
        </button>
      </div>

      {/* Menu Items */}
      <div style={sidebarStyles.menu}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={sidebarStyles.menuItem(activePage === item.id)}
            onClick={() => onPageChange(item.id)}
            onMouseEnter={(e) => {
              if (activePage !== item.id) {
                e.currentTarget.style.background = theme.bgHover;
              }
            }}
            onMouseLeave={(e) => {
              if (activePage !== item.id) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <span style={sidebarStyles.menuIcon}>{item.icon}</span>
            {!sidebarCollapsed && (
              <span style={sidebarStyles.menuLabel}>{item.label}</span>
            )}
          </div>
        ))}
      </div>

      {/* Theme Switcher */}
      <div style={sidebarStyles.themeSection}>
        <div
          style={sidebarStyles.themeButton}
          onClick={() => setShowThemeMenu(!showThemeMenu)}
          onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHover}
          onMouseLeave={(e) => e.currentTarget.style.background = theme.bgTertiary}
        >
          <span style={sidebarStyles.menuIcon}>🎨</span>
          {!sidebarCollapsed && <span style={sidebarStyles.menuLabel}>Themes</span>}
        </div>

        {showThemeMenu && (
          <div style={sidebarStyles.themeMenu}>
            {themes.map((t) => (
              <div
                key={t}
                style={sidebarStyles.themeOption(t)}
                onClick={() => {
                  changeTheme(t);
                  setShowThemeMenu(false);
                }}
              >
                <span>●</span>
                <span style={{ textTransform: 'capitalize' }}>{t}</span>
                {themeName === t && ' ✓'}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* User Profile */}
      {!sidebarCollapsed && (
        <div style={sidebarStyles.userProfile}>
          <Avatar name="Admin User" size={40} />
          <div>
            <div style={{ color: theme.textPrimary, fontWeight: 600 }}>Admin</div>
            <div style={{ color: theme.textTertiary, fontSize: '12px' }}>admin@userhub.com</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;