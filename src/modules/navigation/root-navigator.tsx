import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '@/pages/settings.screen';
import { BottomTabNavigator } from './components/bottom-tab-navigator';

export type RootStackParamList = {
  HomeTab: undefined
}

export const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='HomeTab' 
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

