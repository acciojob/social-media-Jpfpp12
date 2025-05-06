import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>GenZ</h1>
      <nav className="tabs">
        <a href="/" className="tab">Posts</a>
        <a href="/users" className="tab">Users</a>
        <a href="/notifications" className="tab">Notifications</a>
        <a href="/create" className="tab">Create Post</a>
      </nav>
      <div className="posts-list">
        <div className="post">
          <h3>Post Title</h3>
          <p>Post content...</p>
          <button className="button">Edit</button>
        </div>
        <div className="post">
          <h3>Another Post</h3>
          <p>Some content...</p>
          <button className="button">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
