import React from 'react';
import MapView, { MapType } from 'react-native-maps';
import { CustomMarker } from '../modules/game/components/CustomMarker';
import { QuestPopup } from '../modules/game/components/QuestPopup';
import { useRef, useState } from 'react';
import { PlayerMarker } from '../modules/game/components/PlayerMarker';
import { ICoords } from '@/interfaces/ICoords';
import { Platform, Text, View } from 'react-native';
import { EventPopup } from '../modules/game/components/EventPopup';
import { useGame } from '@/modules/game/hooks/useGame';
import { useLocation } from '@/modules/game/hooks/useLocation';
import { GameBottomDrawer } from '@/modules/game/components/GameBottomDrawer';

export const GameScreen = () => {
  useLocation();
  const { state, ui, player } = useGame();

  const mapRef = useRef<MapView>(null);
  const [coords, setCoords] = useState<ICoords>({
    latitude: 0,
    longitude: 0,
  });

  const measure = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6378.137;
    const dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180;
    const dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  };

  return (
    <>
      <View className='absolute left-4 right-4 top-14 z-20 bg-[#E5E5E5] h-20 rounded-3xl justify-center p-4'>
        <Text className='text-xl w-fit'>Задание выполнено!</Text>
      </View>
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
              ui.setQuestPoint(x);
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
      {ui.questPoint && <QuestPopup questPoint={ui.questPoint} />}
      {ui.updatePopup && <EventPopup questCompleted={ui.updatePopup} />}
      <GameBottomDrawer></GameBottomDrawer>
    </>
  );
};
