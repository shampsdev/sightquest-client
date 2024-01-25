import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Main } from './src';
import { usePlayerPosition } from '@/hooks/usePlayerPosition';

export default function App() {
  const { updatePlayerPosition } = usePlayerPosition();

  return (
    <View style={styles.container}>
      <Main />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
