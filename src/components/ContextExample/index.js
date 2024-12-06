import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

const ContextExample = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px' }}>
        <h3>Context API Example</h3>
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default ContextExample;
