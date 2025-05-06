
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import LandingPage from './LandingPage';
import UsersPage from './UsersPage';
import NotificationsPage from './NotificationsPage';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

const EditPostWrapper = () => {
  const { postId } = useParams();

  const dummyPost = {
    id: postId,
    title: `Post ${postId}`,
    content: `Content for post ${postId}`,
  };

  const handleSave = (updatedPost) => {
    alert(`Saved: ${updatedPost.title} - ${updatedPost.content}`);
  };

  return <EditPost post={dummyPost} onSave={handleSave} />;
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:postId" element={<EditPostWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;