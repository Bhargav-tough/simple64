import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Reports = () => {
  const { theme } = useTheme();

  const styles = {
    container: {
      animation: 'fadeIn 0.6s ease-out',
    },
    header: {
      marginBottom: '32px',
    },
    title: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px',
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Reports</h1>
        <p style={{ color: theme.textTertiary }}>Generate and download reports</p>
      </div>
      <div style={{ background: theme.bgSecondary, padding: '24px', borderRadius: '16px' }}>
        <p>Reports coming soon...</p>
      </div>
    </div>
  );
};

export default Reports;