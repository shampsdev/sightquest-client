import MapView, { MapType } from 'react-native-maps';
import { CustomMarker } from './components/CustomMarker';
import { QuestPopup } from './components/QuestPopup';
import { useGameStore } from './store/useGameStore';
import { useMapStore } from './store/useMapStore';
import { useRef, useState } from 'react';
import { PlayerMarker } from './components/PlayerMarker';
import { useSockets } from './hooks/useSockets';
import { ICoords } from '@/interfaces/ICoords';
import { Platform, View } from 'react-native';
import { Timer } from './components/Timer';
import { EventPopup } from './components/EventPopup';

export const Map = () => {
  useSockets();

  const [markers, players] = useGameStore((store) => [
    store.rules.quest_points,
    store.players,
  ]);

  const [questPoint, setQuestPoint, updatePopup] = useMapStore((store) => [
    store.slected_quest_point,
    store.setSelectedQuestPoint,
    store.update_popup,
  ]);
  const mapRef = useRef<MapView>(null);

  const [coords, setCoords] = useState<ICoords>({
    latitude: 0,
    longitude: 0,
  });

  const measure = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
    var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d * 1000; // meters
  };

  return (
    <>
      <View className='absolute top-14 w-full z-20'>
        <Timer />
      </View>
      <MapView
        ref={mapRef}
        className='h-full w-full'
        initialRegion={{
          latitude: 59.9311,
          longitude: 30.3609,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsCompass={false}
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
        {players.map((x, index) => {
          return (
            <PlayerMarker
              key={index}
              user={x.user}
              coordinates={x.coordinates}
              role={'runner'}
              extended={
                Math.abs(coords.latitude - x.coordinates.latitude) +
                  Math.abs(coords.longitude - x.coordinates.longitude) >
                0.005
                  ? false
                  : true
              }
            />
          );
        })}
        {markers.map((x, index) => (
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
            coordinate={x.location}
            distance={measure(
              59.9311,
              30.3609,
              x.location.latitude,
              x.location.longitude
            )}
            src={{ uri: x.photo }}
          />
        ))}
      </MapView>
      {questPoint && <QuestPopup questPoint={questPoint} />}
      {updatePopup && <EventPopup questCompleted={updatePopup} />}
    </>
  );
};
