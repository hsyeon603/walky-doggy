import { useEffect, useState } from 'react';
import styles from '../styles/Map.module.css';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline } from 'react-leaflet';
import Coords from './Coords.jsx';
import '../styles/leaflet.css';
import WalkingPath from './WalkingPath.jsx';

export default function Map() {
  const [coords, setCoords] = useState([0, 0]);
  const [isRecording, setIsRecording] = useState(false);

  const updateCoords = (newCoords) => {
    setCoords(() => newCoords);
  };

  return (
    <div>
      <MapContainer className={styles.Map} center={coords} zoom={17} scrollWheelZoom={false}>
        <Coords updateCoords={updateCoords} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {isRecording && <WalkingPath coords={coords} />}
      </MapContainer>
    </div>
  );
}
