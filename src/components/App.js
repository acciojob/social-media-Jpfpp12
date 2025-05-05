
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import UsersPage from './UsersPage.js';
import NotificationsPage from './NotificationsPage.js';
import CreatePost from './CreatePost.js';
import EditPost from './EditPost.js';

const App = () => {
  return (
    <Router>
    <div>
    {/* Do not remove the main div */}
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/notifications" component={NotificationsPage} />
        <Route path="/create" component={CreatePost} />
        <Route path="/edit/:postId" component={EditPost} />
      </Switch>
      </div>
    </Router>
  );
};

export default App;