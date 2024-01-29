import { Map } from '@/modules/map';
import { CameraModule } from './modules/camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export const Main = () => {
  return (
    <View className='w-full h-full'>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Map' component={Map} />
          <Stack.Screen name='Camera' component={CameraModule} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
