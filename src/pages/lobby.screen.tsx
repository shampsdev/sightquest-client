import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { useGame } from '@/modules/game/hooks/useGame';

export const LobbyScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const game = useGame();

  return (
    <View className='h-full w-full flex flex-col pt-20 pb-10 px-10 justify-between'>
      <TouchableOpacity
        className='p-5 border rounded-3xl w-24'
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      >
        <Text className='text-center'>Back</Text>
      </TouchableOpacity>
      <Text className='text-5xl text-center'>Mike&apos;s room</Text>
      <View className='space-y-5'>
        <View className='flex flex-row gap-5'>
          <View className='p-5 border rounded-3xl flex-1'>
            <Text className='text-center'>#2345</Text>
          </View>
          <TouchableOpacity
            className='p-5 border rounded-3xl flex-1'
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
          >
            <Text className='text-center'>Settings</Text>
          </TouchableOpacity>
        </View>
        <View className='border rounded-3xl h-96'></View>
      </View>
      <TouchableOpacity
        className='w-full p-5 border rounded-2xl'
        onPress={() => {
          game.lobby.joinLobby(1);
          navigation.navigate('GameScreen');
        }}
      >
        <Text className='text-center'>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
