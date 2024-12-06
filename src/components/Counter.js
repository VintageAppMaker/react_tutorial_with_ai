import React, { useState } from 'react';

// State를 사용하는 함수형 컴포넌트 예제
function Counter() {
  // useState 훅을 사용한 상태 관리
  const [count, setCount] = useState(0);

  // 이벤트 핸들러 함수들
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h3>현재 카운트: {count}</h3>
      <div className="counter-buttons">
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <button onClick={reset}>리셋</button>
      </div>
      <p>이것은 state와 이벤트 핸들링을 사용하는 예제입니다.</p>
    </div>
  );
}

export default Counter;
