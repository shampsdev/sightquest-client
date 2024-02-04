import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './components/bottom-tab-navigator';
import { CameraModule } from '@/modules/camera';
import { GameScreen } from '@/pages/game.screen';
import { LobbyScreen } from '@/pages/lobby.screen';
import { RoutesScreen } from '@/pages/routes.screen';
import { ProfileScreen } from '@/pages/profile.screen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  LobbyScreen: undefined;
  RoutesScreen: undefined;
  Camera: undefined;
  GameScreen: undefined;
};

export const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name='HomeScreen' component={BottomTabNavigator} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='LobbyScreen' component={LobbyScreen} />
      <Stack.Screen name='RoutesScreen' component={RoutesScreen} />
      <Stack.Screen name='GameScreen' component={GameScreen} />
      <Stack.Screen name='Camera' component={CameraModule} />
    </Stack.Navigator>
  );
};
