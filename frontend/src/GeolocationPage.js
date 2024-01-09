// src/GeolocationPage.js
import React, { useState } from 'react';
import './GeolocationPage.css';  // Create a CSS file for styling
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const GeolocationPage = () => {
  const [ipAddress, setIpAddress] = useState("Enter IP address");
  const [details, setDetails] = useState({});
  
  const trackIP = async () => {
    try {
      const response = await fetch("http://ip-api.com/batch", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ query: ipAddress }]),
      });

      const data = await response.json();
      const ipDetails = data[0];

      // Update state with IP details
      setDetails(ipDetails);
    } catch (error) {
      console.error('Error tracking IP:', error);
    }
  };

  return (
    
    <div className="geolocation-page">
      <h1>IP Geolocation Tracking</h1>
      <label htmlFor="ipAddress">Give an IP address:</label>
      <input
        type="text"
        id="ipAddress"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
      <button onClick={trackIP}>Track IP</button>

      <div className="map">
  {details.lat && details.lon && (
    <MapContainer center={[details.lat, details.lon]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[details.lat, details.lon]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )}
</div>

      <div className="details">
        <h2>Other Details</h2>
        <ul>
          <li>Country: {details.country}</li>
          <li>Region: {details.regionName}</li>
          <li>City: {details.city}</li>
          {/* Add more details as needed */}
        </ul>
      </div>
    </div>
  );
};

export default GeolocationPage;
