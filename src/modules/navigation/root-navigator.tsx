import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from './components/bottom-tab-navigator';
import { ProfileScreen } from '@/pages/profile.screen';
import { CameraModule } from '@/modules/camera';
import { Map } from '@/modules/map';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  Camera: undefined;
  Map: undefined;
};

export const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={BottomTabNavigator} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='Camera' component={CameraModule} />
      <Stack.Screen name='Map' component={Map} />
    </Stack.Navigator>
  );
};
