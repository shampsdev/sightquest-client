import { CoinsIcon } from '@/assets/icons/coins.icon';
import { LocationIcon } from '@/assets/icons/location.icon';
import { PerkIcon } from '@/assets/icons/perk.icon';
import VelocityIcon from '@/assets/icons/velocity.icon';
import { CustomText } from '@/components/ui/custom-text';
import { View, TouchableOpacity } from 'react-native';
import { GameBottomDrawer } from '../components/GameBottomDrawer';
import { Timer } from '../components/Timer';
import { PerkMenu } from '../components/menus/PerkMenu';
import { EventPopup } from '../components/popups/EventPopup';
import { QuestPopup } from '../components/popups/QuestPopup';
import { RotationPopup } from '../components/popups/RotationPopup';
import { useUserInterface } from '../hooks/useUserInterface';
import { IUserState } from '@/interfaces/IUserState';
import { RefObject } from 'react';
import MapView from 'react-native-maps';
import { IGameState } from '@/interfaces/IGameState';
import { IQuestPoint } from '@/interfaces/IQuestPoint';

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

export const UserInterface = ({ mapRef }: { mapRef: RefObject<MapView> }) => {

  const {
    perkMenu,
    setPerkMenu,
    tracking,
    setTracking,
    questPoint,
    updatePopup,
    rotationPopup,
  } = useUserInterface();

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
            setTracking(!tracking);
          }}
        >
          <LocationIcon fill={tracking ? 'black' : 'none'} />
        </TouchableOpacity>
      </View>
      {perkMenu && <PerkMenu />}
      {questPoint && <QuestPopup questPoint={questPoint} />}
      {updatePopup && <EventPopup questCompleted={updatePopup} />}
      {rotationPopup && <RotationPopup />}
      {player.role == 'runner' && (
        <GameBottomDrawer mapRef={mapRef} questPoints={state.markers} />
      )}
      {player.role == 'catcher' && (
        <View className='rounded-3xl absolute z-10 bottom-8 bg-white left-2 right-2  h-20 flex justify-center items-center'>
          <TouchableOpacity
            onPress={() => {
              console.log('yes');
            }}
          >
            <CustomText size='xl'>Поймать</CustomText>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
