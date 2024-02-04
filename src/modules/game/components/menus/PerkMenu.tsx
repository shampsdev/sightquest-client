import { PerkIcon } from '@/assets/icons/perk.icon';
import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useUserInterface } from '../../hooks/useUserInterface';

export const PerkMenu = () => {
  const { perkMenu, setPerkMenu } = useUserInterface();

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className='w-full h-full absolute z-20'
    >
      <View className='w-full h-full bg-black opacity-40'></View>
      <View className='absolute bottom-[15%] flex gap-y-5 pr-2 pb-3 z-30'>
        <TouchableOpacity
          className='h-20 w-20 rounded-full bg-white flex items-center justify-center p-2'
          onPress={() => {
            setPerkMenu(!perkMenu);
          }}
        >
          <PerkIcon />
        </TouchableOpacity>
        <TouchableOpacity
          className='h-20 w-20 rounded-full bg-white flex items-center justify-center p-2'
          onPress={() => {
            setPerkMenu(!perkMenu);
          }}
        >
          <PerkIcon />
        </TouchableOpacity>
        <TouchableOpacity
          className='h-20 w-20 rounded-full bg-white flex items-center justify-center p-2'
          onPress={() => {
            setPerkMenu(!perkMenu);
          }}
        >
          <PerkIcon />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};
