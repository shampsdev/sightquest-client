import { UserInterface } from '@/modules/game/module/UserInterface';
import { useRef } from 'react';
import MapView from 'react-native-maps';
import { Map } from '@/modules/game/components/Map';

export const GameScreen = () => {
  const mapRef = useRef<MapView>(null);

  return (
    <>
      <Map mapRef={mapRef} />
      <UserInterface mapRef={mapRef} />
    </>
  );
};
