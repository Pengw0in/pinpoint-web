// src/components/SecondarySidebar.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import DashboardContent from '../pages/Overview';
import DeviceListContent from '../pages/DeviceList';
import NotificationsContent from '../pages/Notifications';

const SecondarySidebar = ({ selectedOption, onClose }) => {
  return (
    <Box sx={{
      width: '250px',
      backgroundColor: 'var(--sidebar-background-color)',
      color: 'var(--text-color)',
      height: '100vh',
      padding: '20px',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1000,
      transform: selectedOption ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease-in-out',
    }}>
      <Typography variant="h6" sx={{ marginBottom: '20px' }}>
        {selectedOption}
      </Typography>
      <button onClick={onClose}>Close</button>
      {/* Render content based on selectedOption */}
      {selectedOption === 'Dashboard' && <DashboardContent />}
      {selectedOption === 'Device List' && <DeviceListContent />}
      {selectedOption === 'Notifications' && <NotificationsContent />}
    </Box>
  );
};

export default SecondarySidebar;