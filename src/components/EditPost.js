import React, { useState } from 'react';
import './EditPost.css';

const EditPost = ({ post, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSave = () => {
    onSave({ ...post, title, content });
  };

  return (
    <div className="edit-post">
      <input
        id="postTitle"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave} className="button">
        Save Changes
      </button>
    </div>
  );
};

export default EditPost;
