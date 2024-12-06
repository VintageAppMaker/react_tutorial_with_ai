import React from 'react';

// Props를 사용하는 함수형 컴포넌트 예제
function Welcome({ name }) {
  return (
    <div className="welcome">
      {name ? (
        <h3>안녕하세요, {name}님!</h3>
      ) : (
        <h3>이름을 입력해주세요</h3>
      )}
      <p>이것은 props를 사용하는 예제입니다.</p>
    </div>
  );
}

export default Welcome;
