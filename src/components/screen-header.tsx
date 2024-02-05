import SearchIcon from '@/assets/icons/search.icon';
import React from 'react';
import { Image, View, ViewStyle } from 'react-native';
import { CustomText } from './ui/custom-text';

export const ScreenHeader = ({ styles }: { styles?: ViewStyle }) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          justifyContent: 'space-between',
        },
        styles,
      ]}
    >
      <View className='flex-row items-center pt-4'>
        <SearchIcon />
        <CustomText>Санкт-Петербург</CustomText>
      </View>
      <Image
        source={require('@/assets/logo.png')}
        style={{
          height: 60,
          width: 130,
          position: 'relative',
          marginRight: 4,
        }}
      />
    </View>
  );
};
