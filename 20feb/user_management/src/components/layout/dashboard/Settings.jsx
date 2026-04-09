import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Settings = () => {
  const { theme, changeTheme, themeName } = useTheme();

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
    section: {
      background: theme.bgSecondary,
      border: `1px solid ${theme.borderColor}`,
      borderRadius: '16px',
      padding: '24px',
      marginBottom: '20px',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '16px',
      color: theme.textPrimary,
    },
    themeOption: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginBottom: '8px',
      border: `1px solid ${theme.borderColor}`,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Settings</h1>
        <p style={{ color: theme.textTertiary }}>Customize your experience</p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Theme Preferences</h3>
        {['dark', 'light', 'purple', 'blue', 'green'].map((t) => (
          <div
            key={t}
            style={{
              ...styles.themeOption,
              background: themeName === t ? theme.bgHover : 'transparent',
            }}
            onClick={() => changeTheme(t)}
            onMouseEnter={(e) => e.currentTarget.style.background = theme.bgHover}
            onMouseLeave={(e) => e.currentTarget.style.background = themeName === t ? theme.bgHover : 'transparent'}
          >
            <span style={{ textTransform: 'capitalize' }}>{t} Theme</span>
            {themeName === t && <span>✓</span>}
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Notifications</h3>
        <p>Notification settings coming soon...</p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Account Settings</h3>
        <p>Account settings coming soon...</p>
      </div>
    </div>
  );
};

export default Settings;