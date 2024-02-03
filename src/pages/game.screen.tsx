import React, { useEffect } from 'react';
import MapView, { MapType } from 'react-native-maps';
import { CustomMarker } from '../modules/game/components/CustomMarker';
import { QuestPopup } from '../modules/game/components/QuestPopup';
import { useRef, useState } from 'react';
import { PlayerMarker } from '../modules/game/components/PlayerMarker';
import { ICoords } from '@/interfaces/ICoords';
import { Platform, View } from 'react-native';
import { EventPopup } from '../modules/game/components/EventPopup';
import { GameBottomDrawer } from '@/modules/game/components/GameBottomDrawer';
import { IGameState } from '@/interfaces/IGameState';
import { IUserState } from '@/interfaces/IUserState';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { useUserInterface } from '@/modules/game/hooks/useUserInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PerkIcon } from '@/assets/icons/perk.icon';
import { LocationIcon } from '@/assets/icons/location.icon';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { CoinsIcon } from '@/assets/icons/coins.icon';
import VelocityIcon from '@/assets/icons/velocity.icon';
import { Timer } from '@/modules/game/components/Timer';
import { CustomText } from '@/components/ui/custom-text';

const player: IUserState = {
  user: {
    id: 0,
    username: 'mikedegeofroy',
    avatar:
      'https://media.licdn.com/dms/image/D4E03AQEZcX3i65uV9g/profile-displayphoto-shrink_800_800/0/1681386993606?e=2147483647&v=beta&t=6xXgX1YBGZNI17rfS5vadMzxfSAW4nnqp-kyZsIrjg4',
  },
  coordinates: {
    latitude: 59.94515,
    longitude: 30.298,
  },
  role: 'runner',
  completed: [],
  secret: '',
};

const state: IGameState & { markers: IQuestPoint[] } = {
  players: [player],
  code: 'abcd1234',
  time_left: new Date(),
  settings: {
    quest_points: [],
    time: new Date(),
  },
  state: 'lobby',
  markers: [
    {
      title: 'Стрелка В.О.',
      description: 'Раньше этот остров называли Хирвасаатри',
      location: {
        latitude: 59.944049,
        longitude: 30.30645,
      },
      tasks: [],
      photo:
        'https://i6.photo.2gis.com/images/geo/0/30258560058537396_8894_656x340.jpg',
    },
    {
      title: 'Кунсткамера',
      description: 'Первый публичный музей Европы.',
      location: {
        latitude: 59.94134,
        longitude: 30.302521,
      },
      tasks: [],
      photo:
        'https://i8.photo.2gis.com/images/branch/0/30258560088639614_d3e4_656x340.jpg',
    },
    {
      title: 'Эрмитаж',
      description: 'Коллекция составляет более 3 миллионов экспонатов.',
      location: {
        latitude: 59.940485,
        longitude: 30.31408,
      },
      tasks: [],
      photo:
        'https://i6.photo.2gis.com/images/branch/0/30258560078475071_04cc_656x340.jpg',
    },
  ],
};

export const GameScreen = () => {
  const ui = useUserInterface();

  const mapRef = useRef<MapView>(null);
  const [coords, setCoords] = useState<ICoords>({
    latitude: 0,
    longitude: 0,
  });

  const [traking, setTracking] = useState(false);
  const [perkMenu, setPerkMenu] = useState(false);

  useEffect(() => {
    if (traking) {
      mapRef.current?.animateToRegion({
        ...player.coordinates,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [player, traking]);

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
    return d * 1000; // meters
  };

  return (
    <>
      <View className='absolute left-4 right-4 top-20 z-20 gap-y-5'>
        <Timer />
        <View className='h-12 flex-row'>
          <View className='absolute h-12 w-24 bg-[#afafaf] rounded-2xl left-16 flex justify-center items-center flex-row'>
            <CoinsIcon className='mr-2' />
            <CustomText>20</CustomText>
          </View>
          <View className='absolute h-12 w-20 bg-[#E5E5E5] rounded-2xl flex justify-center items-center flex-row'>
            <VelocityIcon className='mr-2' />
            <CustomText>20</CustomText>
          </View>
        </View>
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
        onPanDrag={() => {
          if (traking) setTracking(!traking);
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
              role={'runner'}
              extended={
                Math.abs(coords.latitude - x.coordinates.latitude) +
                  Math.abs(coords.longitude - x.coordinates.longitude) >
                0.005
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
              ui.setQuestPoint(x);
            }}
            distance={measure(
              59.9311,
              30.3609,
              x.location.latitude,
              x.location.longitude
            )}
            point={x}
          />
        ))}
      </MapView>
      <View
        className='absolute right-0 bottom-[15%] flex gap-y-3 pr-2 pb-3'
        style={{ zIndex: perkMenu ? 30 : 0 }}
      >
        <TouchableOpacity
          className='h-20 w-20 rounded-3xl bg-white flex items-center justify-center p-2'
          onPress={() => {
            setPerkMenu(!perkMenu);
          }}
        >
          <PerkIcon />
        </TouchableOpacity>
        <TouchableOpacity
          className='h-20 w-20 rounded-3xl bg-white flex items-center justify-center p-2'
          onPress={() => {
            setTracking(!traking);
          }}
        >
          <LocationIcon fill={traking ? 'black' : 'none'} />
        </TouchableOpacity>
      </View>
      {perkMenu && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          className='w-full h-full absolute z-20'
        >
          <View className='w-full h-full bg-black opacity-40'></View>
          <View className='absolute bottom-[15%] flex gap-y-5 pr-2 pb-3 z-30'>
            <TouchableOpacity
              className='h-20 w-20 rounded-full bg-white flex items-center justify-center p-2'
              onPress={() => {
                setPerkMenu(!perkMenu);
              }}
            >
              <PerkIcon />
            </TouchableOpacity>
            <TouchableOpacity
              className='h-20 w-20 rounded-full bg-white flex items-center justify-center p-2'
              onPress={() => {
                setPerkMenu(!perkMenu);
              }}
            >
              <PerkIcon />
            </TouchableOpacity>
            <TouchableOpacity
              className='h-20 w-20 rounded-full bg-white flex items-center justify-center p-2'
              onPress={() => {
                setPerkMenu(!perkMenu);
              }}
            >
              <PerkIcon />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
      {ui.questPoint && <QuestPopup questPoint={ui.questPoint} />}
      {ui.updatePopup && <EventPopup questCompleted={ui.updatePopup} />}
      <GameBottomDrawer mapRef={mapRef} questPoints={state.markers} />
    </>
  );
};
