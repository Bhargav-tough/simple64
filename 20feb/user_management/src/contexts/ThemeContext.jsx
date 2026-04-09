import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
  dark: {
    name: 'Dark',
    primary: '#6366f1',
    secondary: '#22d3ee',
    bgPrimary: '#060714',
    bgSecondary: '#0f112a',
    bgTertiary: '#141432',
    bgHover: '#1e1e44',
    borderColor: '#25254f',
    textPrimary: '#e0e0ff',
    textSecondary: '#a0a0d0',
    textTertiary: '#64748b',
    accent: '#a5b4fc',
    danger: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setCurrentTheme(savedTheme);
  }, []);

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem('theme', themeName);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{
      theme: themes[currentTheme],
      themeName: currentTheme,
      changeTheme,
      sidebarCollapsed,
      toggleSidebar,
      themes: Object.keys(themes),
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};