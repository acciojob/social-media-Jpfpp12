import React, { useState } from 'react';

const CreatePost = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    alert(`Post created by ${author}: ${content}`);
  };

  return (
    <div className="create-post">
      <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        <option value="John">John</option>
        <option value="Jane">Jane</option>
      </select>
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post..."
      />
      <button onClick={handleCreatePost} className="button">
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
