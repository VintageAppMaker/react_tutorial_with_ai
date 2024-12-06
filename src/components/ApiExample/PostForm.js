import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const data = await response.json();
      setStatus(`Successfully created post with ID: ${data.id}`);
      setTitle('');
      setBody('');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '15px' }}>
      <h3>Create Post (POST Request Example)</h3>
      <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10px',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          style={{ padding: '8px' }}
          required
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter post body"
          style={{ padding: '8px', minHeight: '100px' }}
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{
            padding: '8px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>
      {status && (
        <div style={{ 
          marginTop: '15px',
          padding: '10px',
          backgroundColor: status.includes('Error') ? '#ffebee' : '#e8f5e9',
          borderRadius: '4px'
        }}>
          {status}
        </div>
      )}
    </div>
  );
};

export default PostForm;
