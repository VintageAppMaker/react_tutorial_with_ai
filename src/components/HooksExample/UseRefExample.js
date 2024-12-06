import React, { useRef, useState } from 'react';

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    setCount(count + 1);     // 리렌더링 발생
    countRef.current += 1;   // 리렌더링 없음
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px' }}>
      <h3>useRef Hook Example</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <p>State Count (렌더링 발생): {count}</p>
        <p>Ref Count (렌더링 없음): {countRef.current}</p>
        <button onClick={handleClick}>Increment Both</button>
      </div>

      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Focus 예제"
          style={{ marginRight: '10px' }}
        />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </div>
  );
};

export default UseRefExample;
