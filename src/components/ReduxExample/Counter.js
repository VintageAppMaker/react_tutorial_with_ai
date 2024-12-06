import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', margin: '10px' }}>
      <h3>Redux Counter Example</h3>
      <div style={{ marginBottom: '10px' }}>
        <button
          style={{ marginRight: '10px' }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          style={{ marginRight: '10px', width: '60px' }}
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
