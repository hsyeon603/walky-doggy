import { useEffect, useState } from 'react';
import { Polyline } from 'react-leaflet';

export default function WalkingPath({ coords }) {
  const [coordsGroup, setCoordsGroup] = useState([coords]);

  const updateCoordsGroup = (newCoords) => {
    setCoordsGroup((group) => [newCoords, ...group]);
  };

  useEffect(() => {
    updateCoordsGroup(coords);
  }, []);

  useEffect(() => {
    console.log('coords:', coordsGroup);
  }, [coordsGroup]);

  return <Polyline positions={coordsGroup} />;
}
