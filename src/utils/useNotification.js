import React, { useState, useEffect } from 'react';

// Custom hook for notifications
function useNotification() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  const hideNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    let notificationTimer;

    if (notification) {
      // Automatically hide the notification after 5 seconds
      notificationTimer = setTimeout(() => {
        hideNotification();
      }, 5000);
    }

    return () => {
      // Clean up the timer when the component unmounts
      if (notificationTimer) {
        clearTimeout(notificationTimer);
      }
    };
  }, [notification]);

  return { notification, showNotification, hideNotification };
}

export default useNotification;
