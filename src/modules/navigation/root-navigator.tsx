import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { BottomTabNavigator } from './components/bottom-tab-navigator';
import { ProfileScreen } from '@/pages/profile.screen';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
}

export const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='HomeScreen' 
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ProfileScreen'
        component={ ProfileScreen }
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

