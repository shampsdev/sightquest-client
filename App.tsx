/// <reference types="nativewind/types" />

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigator } from '@/modules/navigation/root-navigator';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import axios from 'axios';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { AuthNavigator } from '@/modules/navigation/auth-navigator';

SplashScreen.preventAutoHideAsync();

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.request.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

function App() {
  const { user } = useAuth();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Black': require('@/assets/fonts/FormaDJRCyrillicText.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <GestureHandlerRootView className='w-full h-full'>
        <NavigationContainer>
          {user != null ? <RootNavigator /> : <AuthNavigator />}
        </NavigationContainer>
        <StatusBar style='auto' />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
