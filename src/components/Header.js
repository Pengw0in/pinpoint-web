import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './Header.css'; // Import the CSS file for animations

const Header = ({ customerName }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = `Welcome ${customerName}, Here is your Dashboard!`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust the speed of typing here
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 25px',
      backgroundColor: 'var(--header-background-color)',
      color: 'var(--text-color)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
    }}>
      {/* Animated Welcome Message */}
      <Typography variant="h5" className="welcome-message typewriter" sx={{
        flexGrow: 1,
        textAlign: 'center',
        fontWeight: 'normal', // Adjusted font weight
        fontSize: '1.5rem',
        fontFamily: 'Courier, monospace', // Typewriter font
        marginRight: '4px', // Move the button 2px to the left
      }}>
        {displayText}<span className="cursor">|</span>
      </Typography>

      {/* More Info Button */}
      <Button component="a" href="https://challlapalllitarun.wixsite.com/pinpoint" target="_blank" rel="noopener noreferrer" sx={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '8px',
        padding: '10px 20px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: 'black',
        },
      }}>
        More Info
      </Button>
    </Box>
  );
};

export default Header;