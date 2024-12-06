import React, { useState } from 'react';

const UseStateExample = () => {
  // 1. 기본적인 숫자 상태
  const [count, setCount] = useState(0);
  
  // 2. 객체 상태
  const [user, setUser] = useState({
    name: '',
    email: ''
  });
  
  // 3. 배열 상태
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  // 이벤트 핸들러들
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, inputText]);
      setInputText('');
    }
  };

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px' }}>
      <h3>useState Hook Example</h3>

      {/* 숫자 상태 예제 */}
      <div style={{ marginBottom: '20px' }}>
        <h4>1. 숫자 상태</h4>
        <p>카운트: {count}</p>
        <button onClick={handleIncrement}>증가</button>
      </div>

      {/* 객체 상태 예제 */}
      <div style={{ marginBottom: '20px' }}>
        <h4>2. 객체 상태</h4>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleUserChange}
          placeholder="이름"
          style={{ marginRight: '10px' }}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleUserChange}
          placeholder="이메일"
        />
        <p>사용자 정보: {user.name} ({user.email})</p>
      </div>

      {/* 배열 상태 예제 */}
      <div>
        <h4>3. 배열 상태</h4>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="할 일 입력"
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddTodo}>추가</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseStateExample;
