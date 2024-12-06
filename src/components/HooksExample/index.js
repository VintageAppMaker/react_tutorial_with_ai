import React from 'react';
import UseEffectExample from './UseEffectExample';
import UseRefExample from './UseRefExample';
import UseStateExample from './UseStateExample';

const HooksExample = () => {
  return (
    <div>
      <UseStateExample />
      <UseEffectExample />
      <UseRefExample />
    </div>
  );
};

export default HooksExample;
