import { LocationIcon } from '@/assets/icons/location.icon';
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
import { RefObject } from 'react';
import MapView from 'react-native-maps';
import { useGame } from '../hooks/useGame';
import { CoinsIcon } from '@/assets/icons/coins.icon';
import { CatchPopup } from '../components/popups/CatchPopup';

export const UserInterface = ({ mapRef }: { mapRef: RefObject<MapView> }) => {
  const {
    perkMenu,
    tracking,
    setTracking,
    questPoint,
    updatePopup,
    rotationPopup,
    catchPopup,
    codePopup,
    setCatchPopup,
  } = useUserInterface();

  const { state, player, inRange, game } = useGame();

  const [hours, minutes, seconds] = state.settings.duration
    .split(':')
    .map((part) => parseInt(part, 10));

  const durationMs = (hours * 3600 + minutes * 60 + seconds) * 1000;

  return (
    <>
      <View className='absolute left-4 right-4 top-20 z-20 gap-y-5'>
        <Timer until={new Date(Date.now() + durationMs)} />
        <View className='h-12 flex-row'>
          <View className='absolute h-12 w-24 bg-[#afafaf] rounded-2xl left-16 flex justify-center items-center flex-row'>
            <CoinsIcon className='mr-2' />
            <CustomText>—</CustomText>
          </View>
          <View className='absolute h-12 w-20 bg-[#E5E5E5] rounded-2xl flex justify-center items-center flex-row'>
            <VelocityIcon className='mr-2' />
            <CustomText>—</CustomText>
          </View>
        </View>
      </View>
      <View
        className='absolute right-0 bottom-[15%] flex gap-y-3 pr-2 pb-3'
        style={{ zIndex: perkMenu ? 30 : 0 }}
      >
        {/* <TouchableOpacity
          className='h-20 w-20 rounded-3xl bg-white flex items-center justify-center p-2'
          onPress={() => {
            setPerkMenu(!perkMenu);
          }}
        >
          <PerkIcon />
        </TouchableOpacity> */}
        <TouchableOpacity
          className='h-20 w-20 rounded-3xl bg-white flex items-center justify-center p-2'
          onPress={() => {
            setTracking(!tracking);
          }}
        >
          <LocationIcon fill={tracking ? 'black' : 'none'} />
        </TouchableOpacity>
      </View>
      {player?.role == 'RUNNER' && codePopup && (
        <View className='rounded-3xl absolute z-10 top-60 bg-white left-2 right-2  h-20 flex justify-center items-center'>
          <CustomText size='xl'>{player.secret}</CustomText>
        </View>
      )}
      {perkMenu && <PerkMenu />}
      {questPoint && <QuestPopup questPoint={questPoint} />}
      {updatePopup && <EventPopup taskCompleted={updatePopup} />}
      {rotationPopup && <RotationPopup />}
      {catchPopup && <CatchPopup />}
      {player?.role == 'RUNNER' && (
        <GameBottomDrawer mapRef={mapRef} questPoints={state.markers} />
      )}
      {player?.role == 'CATCHER' && inRange() && (
        <TouchableOpacity
          onPress={() => {
            inRange().forEach((x) => game.requestCatch(x.user));
            setCatchPopup(true);
          }}
        >
          <View className='rounded-3xl absolute z-10 bottom-8 bg-white left-2 right-2  h-20 flex justify-center items-center'>
            <CustomText size='xl'>Поймать</CustomText>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};
