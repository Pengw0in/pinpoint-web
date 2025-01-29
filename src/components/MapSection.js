import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/tooltip.css'; // Import the custom tooltip styles

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: '/marker.png', // Path to your custom icon image in the public directory
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point of the icon
  popupAnchor: [0, -32], // Anchor point of the popup relative to the icon
});

const MapSection = () => {
  // Define the positions and names for the markers
  const markers = [
    { position: [17.781131, 83.375100], name: 'Iphone' }, // Example coordinates and name
    { position: [17.780507, 83.376492], name: 'Macbook pro' }, // Example coordinates and name
    { position: [17.782256, 83.377163], name: 'Purse' }, // Example coordinates and name
    { position: [17.781903, 83.375126], name: 'Bicycle' }, // Example coordinates and name
  ];

  return (
    <MapContainer
      center={markers[0].position}
      zoom={17} // Increased initial zoom level
      zoomControl={false}
      style={{ height: '100vh', width: '100vw', overflow: 'hidden' }} // Set height and width to 100vh and 100vw
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customIcon}>
          <Tooltip className="custom-tooltip" direction="top" offset={[0, -20]} opacity={1} permanent>
            {marker.name}
          </Tooltip>
        </Marker>
      ))}
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default MapSection;