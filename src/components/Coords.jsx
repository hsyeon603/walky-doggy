import { useState, useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function Coords({ lat, lon }) {
  const [currCoords, setCurrCoords] = useState({ lat: 0, lon: 0 });
  const map = useMap();

  useEffect(() => {
    setCurrCoords({ lat: lat, lon: lon });
    map.setView([lat, lon]);
  }, [lat, lon]);

  return null;
}
