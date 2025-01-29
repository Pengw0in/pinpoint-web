// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, ListItemIcon } from '@mui/material';
import './Sidebar.css'; // Import the CSS file for animations

const Sidebar = ({ userName = "Mike Trevors", onOptionClick }) => {
  return (
    <Box className="w-64 h-screen p-5 bg-sidebar-background-color text-text-color shadow-lg relative flex flex-col justify-between">
      <div>
        {/* Profile Section */}
        <Box className="flex flex-col items-center mb-8 relative bg-gray-200 p-4 rounded-lg">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mb-4 overflow-hidden">
            <img
              src="/pfp.jpeg" // Replace with your image path
              alt={`${userName}'s profile`}
              className="w-full h-full object-cover"
            />
          </div>
          <Typography variant="h6" className="text-text-color">
            {userName}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            Miketrs01@yahoo.com
          </Typography>
        </Box>

        {/* Navigation Menu */}
        <List className="relative">
          <ListItem button onClick={() => onOptionClick('Dashboard')} className="hover-highlight rounded-lg mb-2">
            <ListItemIcon>
              <img src="dashboard.png" alt="Overview" className="w-5 h-5" />
            </ListItemIcon>
            <ListItemText primary={<Typography style={{ fontWeight: 'bold' }}>Overview</Typography>} className="text-text-color" />
          </ListItem>
          <ListItem button onClick={() => onOptionClick('Device List')} className="hover-highlight rounded-lg mb-2">
            <ListItemIcon>
              <img src="/list-2.png" alt="Device List" className="w-5 h-5" />
            </ListItemIcon>
            <ListItemText primary={<Typography style={{ fontWeight: 'bold' }}>Device List</Typography>} className="text-text-color" />
          </ListItem>
          <ListItem button onClick={() => onOptionClick('Notifications')} className="hover-highlight rounded-lg mb-2">
            <ListItemIcon>
              <img src="notification.png" alt="Notifications" className="w-5 h-5" />
            </ListItemIcon>
            <ListItemText primary={<Typography style={{ fontWeight: 'bold' }}>Notifications</Typography>} className="text-text-color" />
          </ListItem>
        </List>
      </div>

      {/* Bottom Options */}
      <div>
        <List className="relative">
          <ListItem button onClick={() => onOptionClick('Settings')} className="hover-highlight rounded-lg mb-2">
            <ListItemIcon>
              <img src="setting.png" alt="Settings" className="w-5 h-5" />
            </ListItemIcon>
            <ListItemText primary={<Typography style={{ fontWeight: 'bold' }}>Settings</Typography>} className="text-text-color" />
          </ListItem>
          <ListItem button className="hover-highlight rounded-lg mb-2">
            <ListItemIcon>
              <img src="/logout.jpeg" alt="Log Out" className="w-5 h-5" />
            </ListItemIcon>
            <ListItemText primary={<Typography style={{ fontWeight: 'bold', color: 'red' }}>Log Out</Typography>} className="text-text-color" />
          </ListItem>
        </List>
      </div>
    </Box>
  );
};

export default Sidebar;