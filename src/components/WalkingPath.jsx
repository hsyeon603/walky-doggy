import { useEffect, useState } from 'react';
import { Polyline } from 'react-leaflet';

export default function WalkingPath({ coords }) {
  const [coordsGroup, setCoordsGroup] = useState([
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]);

  const updateCoordsGroup = (newCoords) => {
    setCoordsGroup((group) => [newCoords, ...group]);
  };

  useEffect(() => {
    updateCoordsGroup(coords);
  }, []);

  return <Polyline positions={coordsGroup} />;
}
