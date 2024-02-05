import { ArrowIcon } from '@/assets/icons/arrow.icon';
import { useGame } from '@/modules/game/hooks/useGame';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export const ScreenHeaderBack = () => {
  const { lobby } = useGame();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className='w-full h-12'>
      <TouchableOpacity
        className='absolute left-8'
        onPress={async () => {
          await lobby.leaveLobby();
          navigation.goBack();
        }}
      >
        <ArrowIcon />
      </TouchableOpacity>
    </View>
  );
};
