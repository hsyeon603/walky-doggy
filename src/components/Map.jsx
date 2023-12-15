import { useEffect, useState } from 'react';
import styles from '../styles/Map.module.css';
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker, useMap } from 'react-leaflet';
import Coords from './Coords.jsx';
import '../styles/leaflet.css';
export default function Map() {
  const [coords, setCoords] = useState({ lat: 0, lon: 0 });
  const [test, setTest] = useState('');

  const updateCoords = ({ lat, lon }) => {
    setCoords({ lat: lat, lon: lon });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude: lat, longitude: lon } = position.coords;
      updateCoords({ lat, lon });
    });
  }, []);

  useEffect(() => {
    console.log(coords);
  }, [coords]);

  return (
    <div>
      <MapContainer className={styles.Map} center={[coords.lat, coords.lon]} zoom={17} scrollWheelZoom={false}>
        <Coords lat={coords.lat} lon={coords.lon} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Circle id="test" center={[50.5, 30.5]} radius={200} pathOptions={{ color: 'blue' }} />
        <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker> */}
        <Circle center={[coords.lat, coords.lon]} pathOptions={{ fillColor: 'blue' }} radius={50} />
      </MapContainer>
    </div>
  );
}
