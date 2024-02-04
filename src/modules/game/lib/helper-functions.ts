import { ICoords } from '@/interfaces/ICoords';

export const measure = (coordinates1: ICoords, coordinates2: ICoords) => {
  const R = 6378.137;
  const dLat =
    (coordinates2.latitude * Math.PI) / 180 -
    (coordinates1.latitude * Math.PI) / 180;
  const dLon =
    (coordinates2.longitude * Math.PI) / 180 -
    (coordinates1.longitude * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coordinates1.latitude * Math.PI) / 180) *
      Math.cos((coordinates2.latitude * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d * 1000; // meters
};
