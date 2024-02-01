import { CustomText } from '@/components/ui/custom-text';
import React from 'react';
import { View } from 'react-native';

type IStory = {
  image?: string;
  text?: string;
};

export const Story = ({ text, image }: IStory) => {
  return (
    <View className='mx-1'>
      <View className='w-24 h-28 bg-primary rounded-3xl'/>
      <CustomText
        size='lg'
        styles={{
          textAlign: 'center'
        }}
      >
        { text }
      </CustomText>
    </View>
  );
};
