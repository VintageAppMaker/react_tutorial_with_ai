import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Welcome from './components/Welcome';
import RouterExample from './components/RouterExample/RouterExample';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import EventExample from './components/EventExample';
import LifecycleExample from './components/LifecycleExample';
import HooksExample from './components/HooksExample';
import ContextExample from './components/ContextExample';
import ReduxExample from './components/ReduxExample';
import ApiExample from './components/ApiExample';

function App() {
  const [userName, setUserName] = useState('');

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div className="App">
      <h1>React 기초 학습</h1>
      
      {/* Props 예제 */}
      <section className="section">
        <h2>1. Props 예제</h2>
        <input 
          type="text" 
          value={userName}
          onChange={handleNameChange}
          placeholder="이름을 입력하세요"
        />
        <Welcome name={userName} />
      </section>

      {/* State 예제 */}
      <section className="section">
        <h2>2. State 예제</h2>
        <Counter />
      </section>

      {/* 컴포넌트와 리스트 예제 */}
      <section className="section">
        <h2>3. Todo 리스트 예제</h2>
        <TodoList />
      </section>

      {/* Router 예제 */}
      <section className="section">
        <h2>4. Router 예제</h2>
        <RouterExample />
      </section>

      {/* Class Component 예제 */}
      <section className="section">
        <h2>5. Class Component 예제</h2>
        <ClassComponent />
      </section>

      {/* Function Component 예제 */}
      <section className="section">
        <h2>6. Function Component 예제</h2>
        <FunctionComponent />
      </section>

      {/* Event 예제 */}
      <section className="section">
        <h2>7. Event 처리 예제</h2>
        <EventExample />
      </section>

      {/* Lifecycle 예제 */}
      <section className="section">
        <h2>8. Component Lifecycle 예제</h2>
        <LifecycleExample />
      </section>

      {/* Hooks 예제 */}
      <section className="section">
        <h2>9. React Hooks 예제</h2>
        <HooksExample />
      </section>

      {/* Context 예제 */}
      <section className="section">
        <h2>10. Context API 예제</h2>
        <ContextExample />
      </section>

      {/* Redux 예제 */}
      <section className="section">
        <h2>11. Redux 예제</h2>
        <ReduxExample />
      </section>

      {/* API 통신 예제 */}
      <section className="section">
        <h2>12. API 통신 예제</h2>
        <ApiExample />
      </section>
    </div>
  );
}

export default App;
