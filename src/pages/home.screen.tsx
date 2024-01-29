import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PeterPaul } from '@/assets/peterpaul';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className=''>
      <View className='items-center relative'>
        <View className='h-[80vh] w-full pt-20 px-5 space-y-5 flex flex-col justify-center'>
          <View className='h-72 rounded-3xl bg-primary p-5 flex flex-col overflow-hidden justify-between'>
            <PeterPaul className='absolute bottom-4 -left-20 fill-secondary' />
            <Text className='text-white font-bold text-5xl text-right'>
              Санкт-Петербург
            </Text>
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate('Map');
              }}
            >
              <Text className='text-white font-bold text-3xl text-right'>
                {'—>'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
