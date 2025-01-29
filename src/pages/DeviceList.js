import React, { useState, useEffect } from 'react';

const DeviceList = ({ devices = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDevices, setFilteredDevices] = useState(devices);

  useEffect(() => {
    setFilteredDevices(devices);
  }, [devices]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setFilteredDevices(
      devices.filter((device) =>
        device.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleAddDevice = () => {
    // Add device logic
  };

  const handleRingAllDevices = () => {
    // Ring all devices logic
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search devices..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mr-4 p-2 border rounded w-full max-w-xs"
        />
      </div>
      <div className="mb-6 flex space-x-4">
        <button
          onClick={handleAddDevice}
          className="p-2 bg-black text-white rounded-lg w-full max-w-xs hover:bg-blue-700 transition duration-300"
        >
          Add Device
        </button>
        <button
          onClick={handleRingAllDevices}
          className="p-2 bg-black text-white rounded-lg w-full max-w-xs hover:bg-red-700 transition duration-300"
        >
          Ring All Devices
        </button>
      </div>
      <ul className="space-y-2">
        {filteredDevices && filteredDevices.length > 0 ? (
          filteredDevices.map((device) => (
            <li key={device.id} className="p-4 bg-gray-100 rounded-lg shadow-md flex items-center justify-between">
              <span className="text-gray-800">{device.name}</span>
              <button className="p-2 bg-black text-white rounded-lg hover:bg-green-700 transition duration-300">
                Ring
              </button>
            </li>
          ))
        ) : (
          <li className="p-4 bg-gray-100 rounded-lg shadow-md text-center text-gray-800">
            No devices found
          </li>
        )}
      </ul>
    </div>
  );
};

// Mock data for testing
const mockDevices = [
  { id: 1, name: 'Iphone' },
  { id: 2, name: 'Macbook' },
  { id: 3, name: 'Purse' },
  { id: 4, name: 'Bicycle' },
];

// Render the component with mock data
const App = () => <DeviceList devices={mockDevices} />;

export default App;