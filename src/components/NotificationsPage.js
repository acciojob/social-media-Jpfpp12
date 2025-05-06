import React, { useState } from 'react';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  const refreshNotifications = () => {
    setNotifications([
      'New post from John!',
      'Jane commented on your post.',
      'New reaction on your post.',
    ]);
  };

  return (
    <div className="notifications-page">
      <button onClick={refreshNotifications} className="button">
        Refresh Notifications
      </button>
      <div className="notifications-list">
        {notifications.map((notification, index) => (
          <div key={index} className="notification">{notification}</div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
