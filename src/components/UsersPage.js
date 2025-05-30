import React, { useState } from 'react';

const UsersPage = () => {
  const [posts] = useState([
    { id: 1, title: 'Post 1', content: 'Content for post 1', author: 'John' },
    { id: 2, title: 'Post 2', content: 'Content for post 2', author: 'Jane' },
  ]);

  return (
    <div className="users-page">
      <h2>Users</h2>
      <ul className="users-list">
        <li className="user">John</li>
        <li className="user">Jane</li>
      </ul>
      <div className="user-posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
