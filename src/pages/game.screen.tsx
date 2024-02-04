import { UserInterface } from '@/modules/game/module/UserInterface';
import { useRef } from 'react';
import MapView from 'react-native-maps';
import { Map } from '@/modules/game/components/Map';
import { useSockets } from '@/modules/game/hooks/useSockets';
import { useGame } from '@/modules/game/hooks/useGame';
import { useLocation } from '@/modules/game/hooks/useLocation';

export const GameScreen = () => {
  const game = useGame({
    id: 0,
    username: '',
    avatar: '',
  });

  const location = useLocation();
  location.setPositionUpdateCallback(game.state.updatePlayerPosition);

  const sockets = useSockets();
  sockets.receive(game.parseIncomingMessage);

  const mapRef = useRef<MapView>(null);

  return (
    <>
      <Map mapRef={mapRef} />
      <UserInterface mapRef={mapRef} />
    </>
  );
};
