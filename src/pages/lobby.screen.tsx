import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';

export const LobbyScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className='flex justify-center items-center relative h-screen w-full'>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Map');
        }}
      >
        <Text>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
