import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './components/bottom-tab-navigator';
import { CameraModule } from '@/modules/camera';
import { GameScreen } from '@/pages/game.screen';
import { LobbyScreen } from '@/pages/lobby.screen';
import { RoutesScreen } from '@/pages/routes.screen';
import { ProfileScreen } from '@/pages/profile.screen';
import { StoreScreen } from '@/pages/store.screen';
import { PromocodesScreen } from '@/pages/promocodes.screen';
import { PromocodeScreen } from '@/pages/promocode.screen';
import { IPromocode } from '@/interfaces/IPromocode';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  PromocodesScreen: undefined;
  PromocodeScreen: IPromocode[];
  LobbyScreen: undefined;
  LoadScreen: undefined;
  RoutesScreen: undefined;
  StoreScreen: undefined;
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
      {/* <Stack.Screen name='LoadScreen' component={LoadScreen} /> */}
      <Stack.Screen name='HomeScreen' component={BottomTabNavigator} />
      <Stack.Screen name='RoutesScreen' component={RoutesScreen} />
      <Stack.Screen name='StoreScreen' component={StoreScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='LobbyScreen' component={LobbyScreen} />
      <Stack.Screen name='GameScreen' component={GameScreen} />
      <Stack.Screen name='PromocodesScreen' component={PromocodesScreen} />
      <Stack.Screen name='PromocodeScreen' component={PromocodeScreen} />
      <Stack.Screen name='Camera' component={CameraModule} />
    </Stack.Navigator>
  );
};
