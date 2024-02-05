import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Layout } from '@/components/layout';
import { ScrollView } from 'react-native-gesture-handler';
import SwipeButton from '@/components/ui/swipe-button';
import { ScreenHeaderBack } from '@/components/screen-header-back';
import { colors } from '@/constants/colors';
import { TeamPicker } from '@/modules/lobby-sections/team-picker';
import { GameSettings } from '@/modules/lobby-sections/game-settings';
import { QuestsSettings } from '@/modules/lobby-sections/quests-settings';
import { useGame } from '@/modules/game/hooks/useGame';
import { useNavigation } from '@react-navigation/core';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import useGameSettings from '@/stores/game-settings.store';

export const LobbyScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { route } = useGameSettings();
  const { state, lobby, settings } = useGame();

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Call your disconnect or leave lobby method
      lobby.leaveLobby().then(() => {
        // If `disconnect` is async, wait for it to finish then proceed with navigation
        // This removes the listener and goes back to the previous screen
        unsubscribe();
        navigation.dispatch(e.data.action);
      });
    });

    return unsubscribe;
  }, [navigation, lobby]);

  useEffect(() => {
    settings.updateQuestPoints(route?.questPoints ?? []);
  }, [route]);

  const swipeButtonHandle = () => {
    state.updateGameStatus('PLAYING');
    navigation.navigate('GameScreen');
  };

  return (
    <View className='h-full'>
      <ScrollView className='pt-[13%] bg-background'>
        <ScreenHeaderBack
          onPress={async () => {
            lobby.leaveLobby();
          }}
        />
        <Layout
          styles={{
            gap: 16,
            position: 'relative',
          }}
        >
          <TeamPicker players={state.players} />
          <GameSettings settings={state.settings} code={lobby.code} />
          {/* <RouteSettings /> */}
          <QuestsSettings quest_points={state.settings.quest_points} />
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
