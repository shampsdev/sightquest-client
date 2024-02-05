import { Platform } from 'react-native';
import MapView, { MapType } from 'react-native-maps';
import { measure } from '../lib/helper-functions';
import { PlayerMarker } from './markers/PlayerMarker';
import { CustomMarker } from './markers/CustomMarker';
import { useUserInterface } from '../hooks/useUserInterface';
import { RefObject, useEffect, useState } from 'react';
import { ICoords } from '@/interfaces/ICoords';
import { useGame } from '../hooks/useGame';

export const Map = ({ mapRef }: { mapRef: RefObject<MapView> }) => {
  const { tracking, setTracking, setQuestPoint } = useUserInterface();

  const { state, player } = useGame();

  const [coords, setCoords] = useState<ICoords>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (tracking && player != undefined) {
      mapRef.current?.animateToRegion({
        ...player.coordinates,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [player, tracking]);

  return (
    <MapView
      ref={mapRef}
      className='h-full w-full'
      initialRegion={{
        latitude: player?.coordinates.latitude ?? 59.9311,
        longitude: player?.coordinates.latitude ?? 30.3609,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsCompass={false}
      onPanDrag={() => {
        if (tracking) setTracking(!tracking);
      }}
      onRegionChange={(r) => {
        setCoords({
          latitude: r.latitude,
          longitude: r.longitude,
        });
      }}
      mapType={
        Platform.OS != 'ios' ? 'satellite' : ('satelliteFlyover' as MapType)
      }
    >
      {state.players.map((x, index) => {
        return (
          <PlayerMarker
            key={index}
            user={x.user}
            coordinates={x.coordinates}
            role={x.role}
            extended={
              Math.abs(coords.latitude - x.coordinates.latitude) +
                Math.abs(coords.longitude - x.coordinates.longitude) >
                0.005 || x.user.id == player?.user.id
                ? false
                : true
            }
            completed={[]}
            secret={''}
          />
        );
      })}
      {state.markers.map((x, index) => (
        <CustomMarker
          key={index}
          extended={
            Math.abs(coords.latitude - x.location.latitude) +
              Math.abs(coords.longitude - x.location.longitude) >
            0.005
              ? false
              : true
          }
          onPress={() => {
            mapRef.current?.animateToRegion(
              {
                latitude: x.location.latitude,
                longitude: x.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              },
              250
            );
            setQuestPoint(x);
          }}
          point={x}
          distance={measure(
            {
              latitude: 59.9311,
              longitude: 30.3609,
            },
            x.location
          )}
        />
      ))}
    </MapView>
  );
};
