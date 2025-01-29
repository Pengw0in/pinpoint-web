import React, { useState } from 'react';

const Notifications = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const notifications = [
    { id: 1, type: 'Device-Related', message: 'Your iPhone battery is low.' },
    { id: 3, type: 'Account', message: 'Your password was changed successfully.' },
    { id: 4, type: 'Device-Related', message: 'New software update available for your Macbook.' },
    { id: 5, type: 'Alerts and Reminders', message: 'Unable to locate your purse' },
    { id: 6, type: 'Account', message: 'Your subscription will expire in 3 days.' },
  ];

  const renderNotifications = () => {
    const filteredNotifications = filter === 'All' ? notifications : notifications.filter(notification => notification.type === filter);

    return filteredNotifications.map(notification => (
      <div key={notification.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
        <p className="text-gray-800">{notification.message}</p>
      </div>
    ));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Notifications</h1>
      
      <div className="mb-6 flex flex-col space-y-2">
        <label htmlFor="notification-filter" className="text-gray-700">Filter by type:</label>
        <select
          id="notification-filter"
          value={filter}
          onChange={handleFilterChange}
          className="p-2 border rounded-lg text-gray-700 w-full sm:w-auto"
        >
          <option value="All">All</option>
          <option value="Device-Related">Device-Related</option>
          <option value="Alerts and Reminders">Alerts and Reminders</option>
          <option value="Account">Account</option>
        </select>
      </div>

      <div>{renderNotifications()}</div>
    </div>
  );
};

export default Notifications;