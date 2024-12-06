import React, { useState } from 'react';

const FunctionComponent = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddItem = () => {
    if (text.trim() !== '') {
      setItems([...items, text]);
      setText('');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h3>Function Component Example</h3>
      <div>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <button onClick={handleAddItem} style={{ marginLeft: '10px' }}>
          Add Item
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: '10px 0' }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunctionComponent;
