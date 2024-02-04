import { Platform } from 'react-native';
import MapView, { MapType } from 'react-native-maps';
import { measure } from '../lib/helper-functions';
import { PlayerMarker } from './PlayerMarker';
import { CustomMarker } from './markers/CustomMarker';
import { useUserInterface } from '../hooks/useUserInterface';
import { RefObject, useEffect, useState } from 'react';
import { ICoords } from '@/interfaces/ICoords';
import { IGameState } from '@/interfaces/IGameState';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { IUserState } from '@/interfaces/IUserState';

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
  players: [
    player,
    {
      user: {
        id: 1,
        username: 'mityaiii',
        avatar: 'https://avatars.githubusercontent.com/u/93881631?v=4',
      },
      coordinates: {
        latitude: 59.95015,
        longitude: 30.298,
      },
      role: 'runner',
      completed: [],
      secret: '',
    },
    {
      user: {
        id: 2,
        username: 'vaniog',
        avatar: 'https://avatars.githubusercontent.com/u/79862574?v=4',
      },
      coordinates: {
        latitude: 59.94515,
        longitude: 30.299,
      },
      role: 'catcher',
      completed: [],
      secret: '',
    },
  ],
  code: 'abcd1234',
  time_left: new Date(),
  settings: {
    quest_points: [],
    duration: new Date(),
    mode: 'base',
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

export const Map = ({ mapRef }: { mapRef: RefObject<MapView> }) => {
  const { tracking, setTracking, setQuestPoint } = useUserInterface();

  const [coords, setCoords] = useState<ICoords>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (tracking) {
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
                0.005 || x.user.id == player.user.id
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
