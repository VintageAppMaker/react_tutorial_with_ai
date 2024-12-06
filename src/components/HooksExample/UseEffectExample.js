import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  // 컴포넌트 마운트 시 한 번만 실행
  useEffect(() => {
    console.log('Component mounted');
    
    // 컴포넌트 언마운트 시 정리(cleanup)
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // count가 변경될 때마다 실행
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log('Count updated:', count);
  }, [count]);

  // 1초마다 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 타이머 정리(cleanup)
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px' }}>
      <h3>useEffect Hook Example</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <p>Count: {count}</p>
        <button onClick={() => setCount(c => c + 1)}>
          Increment Count
        </button>
      </div>

      <div>
        <p>Current Time: {time.toLocaleTimeString()}</p>
        <p>Check console for useEffect logs</p>
      </div>
    </div>
  );
};

export default UseEffectExample;
