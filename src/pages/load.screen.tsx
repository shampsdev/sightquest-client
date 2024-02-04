import LogoIcon from '@/assets/icons/logo.icon';
import { Layout } from '@/components/layout';
import { CustomText } from '@/components/ui/custom-text';
import SwipeButton from '@/components/ui/swipe-button'
import { colors } from '@/constants/colors';
import React from 'react'
import { View, Image } from 'react-native';

export const LoadScreen = () => {
  const handleToggle = () => {
    
  }

  return (
    <View className='pt-[13%] h-full bg-background'>
      <Layout styles={{
        alignItems: 'center',
      }}>
        <LogoIcon
          className='translate-y-20 '
        />
        <Image
          className='scale-75'
          source={require('@/assets/mascote_victor.png')}
        />
        <CustomText
          styles={{
            marginHorizontal: 'auto',
            textAlign: 'center',
            width: '80%'
          }}
        >
          Игра, в которой бегун выполняет задания на точках активности, пока за ним гонятся два ловца
        </CustomText>
      </Layout>
      <SwipeButton additionStyles={{
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: colors.detail
      }} onToggle={handleToggle}/>
    </View>
  );
};
