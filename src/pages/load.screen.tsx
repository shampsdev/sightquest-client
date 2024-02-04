import LogoIcon from '@/assets/icons/logo.icon';
import SwipeButton from '@/components/ui/swipe-button';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

export const LoadScreen = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (value: boolean | ((prevState: boolean) => boolean)) =>
    setToggleState(value);

  return (
    <View className='h-[90%]'>
      <View className='items-center h-full w-[90%] mx-auto mmy-autot-5'>
        <LogoIcon />
        <View className='bg-[#BABABA] w-full flex-grow rounded-[39px] flex-1 justify-end items-center'>
          <Text className='text-center w-3/4 text-[#5E5E5E]'>
            Игра, в которой бегун выполняет задания на точках активности, пока
            за ним гонятся два ловца
          </Text>
        </View>
        <SwipeButton onToggle={handleToggle} />
      </View>
    </View>
  );
};
