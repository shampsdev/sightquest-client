import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '@/pages/auth.screen';
import { LoadScreen } from '@/pages/load.screen';

export type AuthStackParamList = {
  AuthScreen: undefined;
  LoadScreen: undefined;
};

export const AuthNavigator = () => {
  const Stack = createStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='LoadScreen' component={LoadScreen} />
      <Stack.Screen name='AuthScreen' component={AuthScreen} />
    </Stack.Navigator>
  );
};
