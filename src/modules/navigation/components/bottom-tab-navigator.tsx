import React from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@/pages/settings.screen';
import { CustomBottomTab } from './custom-bottom-tab';

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
  A: undefined;
  B: undefined;
}

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab { ...props }/> 
}

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {

  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='A' component={HomeScreen}/>
      <Tab.Screen name='B' component={HomeScreen}/>
      <Tab.Screen name='Settings' component={HomeScreen}/>
    </Tab.Navigator>
  )
}
