import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useUsers } from '../../hooks/useUsers';

const DashboardHome = () => {
  const { theme } = useTheme();
  const { useUsers, totalUsers } = useUsers();

  const stats = [
    { label: 'Total Users', value: totalUsers, icon: '👥', color: theme.primary },
    { label: 'Active Today', value: '24', icon: '📊', color: theme.secondary },
    { label: 'New This Week', value: '12', icon: '✨', color: '#f59e0b' },
    { label: 'Total Companies', value: '8', icon: '🏢', color: '#10b981' },
  ];

  const recentActivities = [
    { user: 'Arjun Mehta', action: 'updated profile', time: '5 minutes ago', avatar: 'AM' },
    { user: 'Priya Sharma', action: 'added new user', time: '1 hour ago', avatar: 'PS' },
    { user: 'Rohan Das', action: 'changed password', time: '3 hours ago', avatar: 'RD' },
    { user: 'Sneha Verma', action: 'updated settings', time: '5 hours ago', avatar: 'SV' },
  ];

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
    subtitle: {
      color: theme.textTertiary,
      fontSize: '16px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '20px',
      marginBottom: '32px',
    },
    statCard: {
      background: theme.bgSecondary,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '16px',
      padding: '24px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    statIcon: {
      fontSize: '32px',
      marginBottom: '16px',
    },
    statValue: {
      fontSize: '36px',
      fontWeight: '700',
      color: theme.textPrimary,
      marginBottom: '4px',
    },
    statLabel: {
      color: theme.textTertiary,
      fontSize: '14px',
    },
    chartsSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '20px',
      marginBottom: '32px',
    },
    chartCard: {
      background: theme.bgSecondary,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '16px',
      padding: '24px',
    },
    chartTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '20px',
      color: theme.textPrimary,
    },
    activityList: {
      background: theme.bgSecondary,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '16px',
      padding: '24px',
    },
    activityItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '12px 0',
      borderBottom: `1px solid ${theme.borderColor}`,
    },
    activityAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '600',
    },
    activityContent: {
      flex: 1,
    },
    activityUser: {
      fontWeight: '600',
      color: theme.textPrimary,
      marginBottom: '4px',
    },
    activityAction: {
      color: theme.textSecondary,
      fontSize: '14px',
    },
    activityTime: {
      color: theme.textTertiary,
      fontSize: '12px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Dashboard Overview</h1>
        <p style={styles.subtitle}>Welcome back! Here's what's happening with your users today.</p>
      </div>

      {/* Stats Cards */}
      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={styles.statCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.2)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={styles.statIcon}>{stat.icon}</div>
            <div style={styles.statValue}>{stat.value}</div>
            <div style={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div style={styles.chartsSection}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>User Growth</h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            {[65, 45, 75, 55, 85, 70, 90].map((height, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    height: `${height}px`,
                    background: `linear-gradient(to top, ${theme.primary}, ${theme.secondary})`,
                    borderRadius: '8px 8px 0 0',
                    transition: 'height 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                />
                <div style={{ marginTop: '8px', color: theme.textTertiary, fontSize: '12px' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>User Distribution</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {['NexaCorp', 'ZyloTec', 'OrbitSys', 'PixelForge'].map((company, i) => (
              <div key={i} style={{ flex: '1 1 calc(50% - 8px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ color: theme.textSecondary }}>{company}</span>
                  <span style={{ color: theme.textPrimary }}>{[42, 28, 18, 12][i]}%</span>
                </div>
                <div style={{ height: '8px', background: theme.bgTertiary, borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${[42, 28, 18, 12][i]}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                      borderRadius: '4px',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={styles.activityList}>
        <h3 style={{ ...styles.chartTitle, marginBottom: '16px' }}>Recent Activity</h3>
        {recentActivities.map((activity, index) => (
          <div key={index} style={styles.activityItem}>
            <div style={styles.activityAvatar}>{activity.avatar}</div>
            <div style={styles.activityContent}>
              <div style={styles.activityUser}>{activity.user}</div>
              <div style={styles.activityAction}>{activity.action}</div>
            </div>
            <div style={styles.activityTime}>{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;