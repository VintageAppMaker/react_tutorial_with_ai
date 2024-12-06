import React from 'react';
import UserList from './UserList';
import PostForm from './PostForm';

const ApiExample = () => {
  return (
    <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
      <UserList />
      <PostForm />
    </div>
  );
};

export default ApiExample;
