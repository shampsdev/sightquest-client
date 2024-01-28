/// <reference types="nativewind/types" />

import { Main } from './src';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <GestureHandlerRootView className='w-full h-full'>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
      <StatusBar style='auto' />
    </GestureHandlerRootView>
  );
}
