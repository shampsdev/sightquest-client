import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@/pages/home.screen';
import { CustomBottomTab } from './custom-bottom-tab';
import { ProfileScreen } from '@/pages/profile.screen';
import { FriendsScreen } from '@/pages/friends.screen';

export type BottomTabParamList = {
  HomeTab: undefined;
  FriendsTab: undefined;
  ProfileTab: undefined;
};

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTab {...props} />;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={CustomBottomTabs}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name='HomeTab' component={HomeScreen} />
      <Tab.Screen name='FriendsTab' component={FriendsScreen} />
      <Tab.Screen name='ProfileTab' component={ProfileScreen} />
    </Tab.Navigator>
  );
};
