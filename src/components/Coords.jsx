import { useState, useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

export default function Coords({ updateCoords }) {
  const map = useMap();
  map.locate({ watch: true, setView: true });
  map.on('locationfound', (location) => {
    console.log('location found:', location);
    updateCoords(map.getCenter());
  });

  return null;
}
