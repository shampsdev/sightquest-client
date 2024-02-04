import { CustomText } from '@/components/ui/custom-text';
// import { borderRadius } from '@/constants/colors';
import { globalStyles } from '@/styles/global.style';
import React from 'react';
import { View } from 'react-native';

export const Header = () => {
  return (
    <View className='flex-row justify-around'>
      <View
        style={[
          globalStyles.border,
          {
            borderRadius: 24,
            width: 140,
          },
        ]}
      >
        <CustomText styles={{ textAlign: 'center' }} size='lg'>
          Для бегуна
        </CustomText>
      </View>
      <View
        style={[
          globalStyles.border,
          {
            borderRadius: 24,
            width: 140,
          },
        ]}
      >
        <CustomText styles={{ textAlign: 'center' }} size='lg'>
          Для ловца
        </CustomText>
      </View>
    </View>
  );
};
