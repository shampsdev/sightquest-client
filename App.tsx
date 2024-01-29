/// <reference types="nativewind/types" />

import { RootNavigator } from "@/modules/navigation/root-navigator";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Main } from './src';

function App() {
  return (
    <SafeAreaProvider>

    <GestureHandlerRootView className='w-full h-full'>
       <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
      <Main />
      <StatusBar style='auto' />
    </GestureHandlerRootView>
            </SafeAreaProvider>
  );
}

export default App;
