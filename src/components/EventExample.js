import React, { useState } from 'react';

const EventExample = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [keyPressed, setKeyPressed] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  // 마우스 이벤트 핸들러
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    });
  };

  // 키보드 이벤트 핸들러
  const handleKeyPress = (e) => {
    setKeyPressed(e.key);
  };

  // 폼 이벤트 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {/* 마우스 이벤트 */}
      <div 
        onMouseMove={handleMouseMove}
        style={{ 
          border: '1px solid #ddd',
          padding: '20px',
          marginBottom: '20px',
          backgroundColor: '#f5f5f5'
        }}
      >
        <h4>마우스 이벤트</h4>
        <p>마우스 위치: X: {mousePosition.x}, Y: {mousePosition.y}</p>
      </div>

      {/* 키보드 이벤트 */}
      <div style={{ marginBottom: '20px' }}>
        <h4>키보드 이벤트</h4>
        <input
          type="text"
          onKeyPress={handleKeyPress}
          placeholder="키를 입력하세요"
          style={{ marginRight: '10px' }}
        />
        <span>마지막으로 입력한 키: {keyPressed}</span>
      </div>

      {/* 폼 이벤트 */}
      <div>
        <h4>폼 이벤트</h4>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="이름"
              style={{ marginRight: '10px' }}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="이메일"
            />
          </div>
          <button type="submit">제출</button>
        </form>
        {submitted && (
          <div style={{ marginTop: '10px', color: 'green' }}>
            제출된 데이터: {formData.name}, {formData.email}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventExample;
