import React, { useState, useEffect } from 'react';

const FunctionLifecycle = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState(['Component initialized']);

  // componentDidMount 대응
  useEffect(() => {
    console.log('Component Mounted (useEffect with empty deps)');
    addLog('Component Mounted');

    // componentWillUnmount 대응
    return () => {
      console.log('Component Will Unmount (cleanup)');
    };
  }, []);

  // componentDidUpdate 대응 (count 변경 시)
  useEffect(() => {
    if (count > 0) {
      console.log(`Count updated to: ${count}`);
      addLog(`Count updated to: ${count}`);
    }
  }, [count]);

  const addLog = (message) => {
    setLogs(prevLogs => [...prevLogs, message]);
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  console.log('Render: 컴포넌트 렌더링');

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px' }}>
      <h3>Function Lifecycle Example (with Hooks)</h3>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>
        Increment Count
      </button>
      <div style={{ marginTop: '10px' }}>
        <h4>Effect Logs:</h4>
        <ul style={{ maxHeight: '150px', overflowY: 'auto', backgroundColor: '#f5f5f5', padding: '10px' }}>
          {logs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FunctionLifecycle;
