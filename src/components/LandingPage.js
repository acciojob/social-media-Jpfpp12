import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Shopping Cart</h1>
      <nav className="tabs">
        <Link className="tab" to="/">Home</Link>
        <Link className="tab" to="/users">Users</Link>
        <Link className="tab" to="/notifications">Notifications</Link>
        <Link className="tab" to="/create">Create Post</Link>
      </nav>
      <div className="posts-list">
        <div className="post">
          <h3>Post Title</h3>
          <p>Post content...</p>
        </div>
        <div className="post">
          <h3>Another Post</h3>
          <p>Some content...</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;