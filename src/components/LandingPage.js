import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="tabs">
        <div className="tab">Home</div>
        <div className="tab">Users</div>
        <div className="tab">Notifications</div>
        <div className="tab">Create Post</div>
      </nav>
      <div className="posts-list">
        {/* Example of static posts */}
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
