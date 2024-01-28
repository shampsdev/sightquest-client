/// <reference types="nativewind/types" />

import { RootNavigator } from "@/modules/navigation/root-navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "@/pages/settings.screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

// import { Main } from './src';
// import { StatusBar } from 'expo-status-bar';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <GestureHandlerRootView className='w-full h-full'>
//       {/* <NavigationContainer>
//         <Main />
//       </NavigationContainer> */}
//       <></>
//       <StatusBar style='auto' />
//     </GestureHandlerRootView>
//   );
// }

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
