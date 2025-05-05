
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UsersPage from './components/UsersPage';
import NotificationsPage from './components/NotificationsPage';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

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