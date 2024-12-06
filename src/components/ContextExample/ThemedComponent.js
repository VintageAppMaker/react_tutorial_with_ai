import React from 'react';
import { useTheme } from './ThemeContext';

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#000000' : '#ffffff',
      border: '1px solid #ddd',
      margin: '10px',
      borderRadius: '5px',
      transition: 'all 0.3s ease'
    },
    button: {
      padding: '8px 16px',
      backgroundColor: theme === 'light' ? '#007bff' : '#17a2b8',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h3>Context Theme Example</h3>
      <p>Current Theme: {theme}</p>
      <button style={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
