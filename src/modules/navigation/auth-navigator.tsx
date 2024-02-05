import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '@/pages/auth.screen';
import { SignUpScreen } from '@/pages/sign-up.screen';

export type AuthStackParamList = {
  AuthScreen: undefined;
  SignUpScreen: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='AuthScreen' component={AuthScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
    </Stack.Navigator>
  );
};
