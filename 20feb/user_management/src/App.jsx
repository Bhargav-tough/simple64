import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import DashboardLayout from './components/layout/DashboardLayout';
import DashboardHome from './components/dashboard/DashboardHome';
import UserManagement from './components/user-management/UserManagement';
import Analytics from './components/dashboard/Analytics';
import Reports from './components/dashboard/Reports';
import Settings from './components/dashboard/Settings';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardHome />;
      case 'users':
        return <UserManagement />;
      case 'analytics':
        return <Analytics />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <ThemeProvider>
      <DashboardLayout activePage={activePage} onPageChange={setActivePage}>
        {renderPage()}
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default App;