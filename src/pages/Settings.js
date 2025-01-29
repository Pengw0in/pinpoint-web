// src/pages/Settings.js
import React from 'react';
import { Box, Typography, List, } from '@mui/material';
import Sidebar from '../components/Sidebar'; // Import Sidebar component

const Settings = () => {
  return (
    <Box className="flex">
      <Sidebar onOptionClick={(option) => console.log(option)} /> {/* Add Sidebar component */}
      <Box className="p-6 bg-gray-50 min-h-screen flex-grow">
        <Typography variant="h4" className="mb-6 font-semibold text-gray-900">
          Settings
        </Typography>
        <List>
          {/* Other settings options can go here */}
        </List>
      </Box>
    </Box>
  );
};

export default Settings;