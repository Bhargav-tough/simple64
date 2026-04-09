import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Analytics = () => {
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
    metricsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    metricCard: {
      background: theme.bgSecondary,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '16px',
      padding: '24px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Analytics</h1>
        <p style={{ color: theme.textTertiary }}>Detailed insights and metrics</p>
      </div>
      <div style={styles.metricsGrid}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={styles.metricCard}>
            <h3>Analytics Metric {i}</h3>
            <p>Coming soon...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;