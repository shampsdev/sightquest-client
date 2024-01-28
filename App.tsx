/// <reference types="nativewind/types" />

import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Main } from './src';

export default function App() {
  return (
    <GestureHandlerRootView className='w-full h-full'>
      <Main />
      <StatusBar style='auto' />
    </GestureHandlerRootView>
  );
}
