import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '@/pages/auth.screen';

export type AuthStackParamList = {
  AuthScreen: undefined;
};

export const AuthNavigator = () => {
  const Stack = createStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='AuthScreen' component={AuthScreen} />
    </Stack.Navigator>
  );
};
