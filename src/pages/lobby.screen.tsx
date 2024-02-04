import React from 'react';
import { View } from 'react-native';
import { Layout } from '@/components/layout';
import { ScrollView } from 'react-native-gesture-handler';
import SwipeButton from '@/components/ui/swipe-button';
import { ScreenHeaderBack } from '@/components/screen-header-back';
import { colors } from '@/constants/colors';
import { TeamPicker } from '@/modules/lobby-sections/team-picker';
import { GameSettings } from '@/modules/lobby-sections/game-settings';
import { RouteSettings } from '@/modules/lobby-sections/route-settings';
import { QuestsSettings } from '@/modules/lobby-sections/quests-settings';
import { useGame } from '@/modules/game/hooks/useGame';
import { useNavigation } from '@react-navigation/core';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { StackNavigationProp } from '@react-navigation/stack';

export const LobbyScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { state, lobby } = useGame();

  const swipeButtonHandle = () => {
    lobby.joinLobby('1M5J7EQO');
    state.updateGameStatus('playing');
    navigation.navigate('GameScreen');
  };

  return (
    <View className='h-full'>
      <ScrollView className='pt-[13%] bg-background'>
        <ScreenHeaderBack />
        <Layout
          styles={{
            gap: 16,
            position: 'relative',
          }}
        >
          <TeamPicker />
          <GameSettings />
          <RouteSettings />
          <QuestsSettings />
        </Layout>
        <View className='h-40' />
      </ScrollView>

      <SwipeButton
        additionStyles={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
          backgroundColor: colors.detail,
        }}
        onToggle={swipeButtonHandle}
      />
    </View>
  );
};
