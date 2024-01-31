import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './components/bottom-tab-navigator';
import { ProfileScreen } from '@/pages/profile.screen';
import { CameraModule } from '@/modules/camera';
import { GameScreen } from '@/pages/game.screen';
import { LobbyScreen } from '@/pages/lobby.screen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  LobbyScreen: undefined;
  Camera: undefined;
  GameScreen: undefined;
};

export const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={BottomTabNavigator} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='LobbyScreen' component={LobbyScreen} />
      <Stack.Screen name='Camera' component={CameraModule} />
      <Stack.Screen name='GameScreen' component={GameScreen} />
    </Stack.Navigator>
  );
};
