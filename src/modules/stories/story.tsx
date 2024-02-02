import { CustomText } from '@/components/ui/custom-text';
import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type IStory = {
  image?: string;
  text?: string;
  index: number;
};

export const Story = ({ text, image, index }: IStory) => {
  return (
    <TouchableOpacity className='mx-1'>
      <Image
        className='w-24 h-28 bg-primary rounded-3xl'
        source={require('@/assets/default-avatar.jpg')}
      />
      <CustomText
        size='lg'
        styles={{
          textAlign: 'center'
        }}
      >
        { text }
      </CustomText>
    </TouchableOpacity>
  );
};
