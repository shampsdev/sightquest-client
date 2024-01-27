/// <reference types="nativewind/types" />

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Main } from './src';
import { usePlayerPosition } from '@/hooks/usePlayerPosition';

export default function App() {
  const { updatePlayerPosition } = usePlayerPosition();

  return (
    <View className='w-full h-full'>
      <Main />
      <StatusBar style='auto' />
    </View>
  );
}
