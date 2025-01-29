// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MapSection from './components/MapSection';
import Dashboard from './pages/Overview';
import DeviceList from './pages/DeviceList';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings'; // Import Settings component
import SecondarySidebar from './components/SecondarySidebar';
import './index.css'; // Import the CSS file

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleClose = () => {
    setSelectedOption(null);
  };

  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar userName="Mike Trevers" onOptionClick={handleOptionClick} />

        {/* Main content */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
          <Header customerName="Mike" />
          <div style={{ flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
            <Routes>
              <Route path="/overview" element={<Dashboard />} />
              <Route path="/device-list" element={<DeviceList />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<MapSection />} />
            </Routes>
          </div>
        </div>

        {/* Secondary Sidebar */}
        <SecondarySidebar selectedOption={selectedOption} onClose={handleClose} />
      </div>
    </Router>
  );
};

export default App;