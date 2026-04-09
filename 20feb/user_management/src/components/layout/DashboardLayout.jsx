import React from 'react';
import Sidebar from '../common/Sidebar';
import { useTheme } from '../../contexts/ThemeContext';

const DashboardLayout = ({ children, activePage, onPageChange }) => {
  const { theme, sidebarCollapsed } = useTheme();

  const layoutStyles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: theme.bgPrimary,
      color: theme.textPrimary,
    },
    main: {
      flex: 1,
      marginLeft: sidebarCollapsed ? '80px' : '280px',
      transition: 'margin-left 0.3s ease',
      padding: '24px',
    },
    content: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
  };

  return (
    <div style={layoutStyles.container}>
      <Sidebar activePage={activePage} onPageChange={onPageChange} />
      <main style={layoutStyles.main}>
        <div style={layoutStyles.content}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;