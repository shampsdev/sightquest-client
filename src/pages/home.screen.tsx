import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import React, { useCallback } from 'react';
import LeftArrowIcon from '@/assets/icons/left-arrow.icon';
import { ScreenHeader } from '@/components/screen-header';
import { Layout } from '@/components/layout';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className='pt-10'>
      <Layout>
        <ScreenHeader/>

        <Text className='text-4xl'>
          Привет, Виктор!
        </Text>

        <View className='flex-row gap-x-2 items-center'>
          <Text 
          style={{ fontFamily: 'Inter-Black' }} 
          className='w-max text-4xl'>Готов</Text>
          <View className='flex-grow bg-detail h-8 rounded-lg'/>
          <Text className='w-max text-4xl '>играть</Text>
        </View>

        <View className='flex-row gap-x-2 items-center'>
          <Text className='w-max text-4xl'>в</Text>
          <View className='flex-grow bg-detail h-8 rounded-lg'/>
          <Text className='w-max text-4xl '>догонялки?</Text>
        </View>

        <View className='mt-5 rounded-[39px] bg-primary h-64 relative'>
          <Text className='absolute bg-secondary p-4 rounded-full top-4 left-4 text-xl'>
            Санкт-Петербург
          </Text>

          <View className='absolute p-4 bg-secondary bottom-4 left-4 rounded-full'>
            <LeftArrowIcon/>
          </View>

          <View className='absolute p-4 bg-secondary bottom-4 right-4 rounded-full'>
            <LeftArrowIcon/>
          </View>
          <View/>
        </View>
      </Layout>
    </View>
  );
};
