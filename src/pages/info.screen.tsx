import { Border } from '@/components/border';
import { Layout } from '@/components/layout';
import { ScreenHeader } from '@/components/screen-header';
import React from 'react';
import { Text, View } from 'react-native';

const array = [1, 2, 3, 5, 6];

export const InfoScreen = () => {
  return (
    <View className='mt-10'>
      <Layout>
        <ScreenHeader />
        <Border>
          <Text className='text-3xl'>Привет, Виктор!</Text>
          <Text className='text-lg'>Готов играть в догонялки?</Text>
        </Border>

        <View className='flex-row gap-x-3 mt-3'>
          {array.map((value, indx) => (
            <View
              key={indx}
              className='w-20 h-20 border-2 border-black bg-secondary rounded-full'
            />
          ))}
        </View>

        <View>
          <Text>Создать команду</Text>
          <View>
            <Border>
              <Text className='text-3xl'>Соло</Text>
            </Border>

            <Border>
              <Text className='text-3xl'>С друзьями</Text>
            </Border>
          </View>
        </View>
      </Layout>
    </View>
  );
};
