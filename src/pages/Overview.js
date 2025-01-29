import React from 'react';

const DeviceCard = ({ name, status }) => (
  <div className="bg-white p-4 rounded border border-gray-200">
    <h3 className="text-xl font-normal text-gray-900">{name}</h3>
    <p className="text-gray-500 mt-1">Status: {status}</p>
    <button className="w-full mt-4 py-2 px-4 bg-black text-white rounded hover:bg-blue-600 transition-colors">
      View Details
    </button>
  </div>
);

const DeviceOverview = () => {
  const devices = [
    { name: 'Macbook', status: 'Active' },
    { name: 'Iphone', status: 'Offline' },
    { name: 'Purse', status: 'Active' },
    { name: 'Bicycle', status: 'Offline' },
  ];

  return (
    <div className="bg-white rounded-lg max-w-lg">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold">Device Overview</h2>
      </div>
      
      <div className="p-4 grid grid-cols-1 gap-4">
        {devices.map((device, index) => (
          <DeviceCard
            key={index}
            name={device.name}
            status={device.status}
          />
        ))}
      </div>
    </div>
  );
};

export default DeviceOverview;