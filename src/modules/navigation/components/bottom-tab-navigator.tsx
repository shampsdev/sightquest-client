import React from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '@/pages/home.screen';
import { CustomBottomTab } from './custom-bottom-tab';
import { ProfileScreen } from '@/pages/profile.screen';
import { RoutesScreen } from '@/pages/routes.screen';
import { SettingsScreen } from '@/pages/settings.screen';

export type BottomTabParamList = {
  HomeTab: undefined;
  SettingsTab: undefined;
  ProfileTab: undefined;
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
      <Tab.Screen name='HomeTab' component={HomeScreen}/>
      <Tab.Screen name='ProfileTab' component={ProfileScreen}/>
      <Tab.Screen name='B' component={RoutesScreen}/>
      <Tab.Screen name='SettingsTab' component={SettingsScreen}/>
    </Tab.Navigator>
  )
}
