import { Section } from '@/components/section';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RootStackParamList } from '../navigation/root-navigator';
import { CustomText } from '@/components/ui/custom-text';
import { toast, ToastPosition } from '@backpackapp-io/react-native-toast';
import { Border } from '@/components/border';
import PlusIcon from '@/assets/icons/plus.icon';
import { borderRadius, colors } from '../../constants/colors';
import { useGame } from '../game/hooks/useGame';

const sizeOfLobbyId = 7;

const toastStyle = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#AEADAD',
    fontFamily: 'Inter-Black',
  },
});

const dynamicText = `Играть 
с друзьями`;

export const CreateRoom = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { lobby } = useGame();
  const [lobbyId, setLobbyId] = useState('');

  // const connectToLobby = (variant: 'solo' | 'multi') => {
  //   const lobbyForConnection = lobbyId.slice(1, lobbyId.length);

  //   if (
  //     lobbyForConnection.length !== sizeOfLobbyId &&
  //     lobbyForConnection.length !== 0 &&
  //     variant === 'multi'
  //   ) {
  //     toast('Введите id лобби (например: #PR1VET)', {
  //       duration: 4000,
  //       position: ToastPosition.TOP,
  //       icon: '⚠️',
  //       styles: {
  //         view: toastStyle.container,
  //       },
  //     });

  //     return;
  //   }

  //   lobby.joinLobby(lobbyId);
  //   navigation.navigate('LobbyScreen');
  // };

  const lobbyIdHandle = async (input: string) => {
    if (lobbyId?.length === 0 && input[0] !== '#') {
      setLobbyId('#' + input);
      return;
    }

    if (lobbyId?.length === 8) {
      console.log(lobbyId);
      await lobby.joinLobby(lobbyId);
      navigation.navigate('LobbyScreen');
    }

    setLobbyId(input);
  };

  return (
    <Section text='Создать комнату'>
      <View className='flex-row justify-center gap-x-1'>
        <TouchableOpacity
          onPress={async () => {
            // const id = await lobby.createLobby();
            await lobby.joinLobby('1M5J7EQO');
            navigation.navigate('LobbyScreen');
          }}
          style={{
            width: '49%',
          }}
        >
          <ImageBackground
            style={{
              position: 'relative',
              width: '100%',
              height: 200,
            }}
            borderRadius={borderRadius}
            source={require('@/assets/main-border-1.jpg')}
          >
            <PlusIcon
              style={{
                position: 'absolute',
                top: 16,
                left: 16,
              }}
            />
            <CustomText
              styles={{
                position: 'absolute',
                left: 16,
                bottom: 16,
                color: colors.primary,
              }}
              size='lg'
            >
              {dynamicText}
            </CustomText>
          </ImageBackground>
        </TouchableOpacity>
        <View
          style={{
            width: '49%',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              const id = await lobby.createLobby();
              await lobby.joinLobby(id);
              navigation.navigate('LobbyScreen');
            }}
          >
            <ImageBackground
              source={require('@/assets/border-main-2.jpg')}
              style={{
                position: 'relative',
                width: '100%',
                height: 154,
              }}
              borderRadius={borderRadius}
            >
              <CustomText
                size='lg'
                styles={{
                  position: 'absolute',
                  right: 16,
                  top: 16,
                  color: colors.primary,
                }}
              >
                Одному/
              </CustomText>
              <CustomText
                size='lg'
                styles={{
                  position: 'absolute',
                  left: 16,
                  bottom: 16,
                  color: colors.primary,
                }}
              >
                /Одной
              </CustomText>
              <PlusIcon
                stroke={colors.primary}
                style={{
                  position: 'absolute',
                  left: 16,
                  top: 16,
                }}
              />
            </ImageBackground>
          </TouchableOpacity>
          <Border
            styles={{
              marginTop: 4,
            }}
          >
            <TextInput
              maxLength={sizeOfLobbyId + 1}
              onChangeText={lobbyIdHandle}
              value={lobbyId}
              className='px-2'
              placeholder='Ввести код'
            />
          </Border>
        </View>
      </View>
    </Section>
  );
};
