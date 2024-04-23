import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Stats from './Stats';
import Map from './Map';

const IPAddress = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [ISP, setISP] = useState('');
  const [coordinates, setCoordinates] = useState(null); 

  const fetchLocation = (ipAddress = '') => {
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_WJ7cE5CG7OenAVCV3ae5tTw6vBubh&ipAddress=${ipAddress}`
    )
      .then((res) => res.json())
      .then((data) => {
        setIpAddress(data.ip);
        setLocation(`${data.location.city}, ${data.location.country}, ${data.location.postalCode}`);
        setTimeZone(`UTC ${data.location.timezone}`);
        setISP(`${data.isp}`);
        setCoordinates({ lat: data.location.lat, lng: data.location.lng });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="flex flex-col h-screen relative">
      <SearchBar setIpAddress={setIpAddress} fetchLocation={fetchLocation} />
      <Stats ipAddress={ipAddress} location={location} timeZone={timeZone} isp={ISP} />
      {coordinates && <Map coordinates={coordinates} />}
    </div>
  );
};

export default IPAddress;
