// src/pages/Dashboard.js
import React from 'react';
import DeviceOverview from '../components/subcomponents/DeviceOverview';
import ActiveAlerts from '../components/subcomponents/ActiveAlerts';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <DeviceOverview />
      <ActiveAlerts />
    </div>
  );
};

export default Dashboard;