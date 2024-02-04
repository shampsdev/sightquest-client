import { Section } from '@/components/section'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigation/root-navigator';
import { CustomText } from '@/components/ui/custom-text';
import { toast, ToastPosition } from '@backpackapp-io/react-native-toast';
import { Border } from '@/components/border';
import PlusIcon from '@/assets/icons/plus.icon';
import { borderRadius, colors } from '../../constants/colors';

const sizeOfLobbyId = 6;

const toastStyle = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#AEADAD',
    fontFamily: 'Inter-Black',
  }
})

const dynamicText = `Играть 
с друзьями`;

export const CreateRoom = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [lobbyId, setLobbyId] = useState<string>('');

  const connectToLobby = (variant: 'solo' | 'multi') => {
    const lobbyForConnection = lobbyId.slice(1, lobbyId.length);

    if (lobbyForConnection.length !== sizeOfLobbyId && lobbyForConnection.length !== 0 && variant === 'multi') {
      toast('Введите id лобби (например: #PR1VET)', {
        duration: 4000,
        position: ToastPosition.TOP,
        icon: '⚠️',
        styles: {
          view: toastStyle.container,
        },
      });

      return;
    }

    navigation.navigate('LobbyScreen');
  }

  const lobbyIdHandle = (input: string) => {
    if (lobbyId?.length === 0 && input !== '#') {
      setLobbyId('#' + input);
      return;
    }

    setLobbyId(input);
  }

  return (
    <Section text='Создать комнату'>
      <View className='flex-row justify-center gap-x-1'>
        
        <TouchableOpacity 
          onPress={
            () => connectToLobby('multi')
          }
          style={{
            // backgroundColor: colors.primary,
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
                color: colors.primary
              }}
              size='lg'
            >
              { dynamicText }
            </CustomText>
            </ImageBackground>
        </TouchableOpacity>
        <View style={{
          width: '49%'
        }}>
          <TouchableOpacity
            onPress={
              () => connectToLobby('solo')
            }
          >
            <ImageBackground
              source={require('@/assets/border-main-2.jpg')}
              style={{
                position: 'relative',
                width: '100%',
                height: 140,
              }}
              borderRadius={borderRadius}
            >
              <CustomText size='lg' styles={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: colors.primary
              }}>Одному/</CustomText>
              <CustomText size='lg' styles={{
                position: 'absolute',
                left: 16,
                bottom: 16,
                color: colors.primary
              }}>/Одной</CustomText>
              <PlusIcon
                stroke={colors.primary}
                style={{
                  position: 'absolute',
                  left: 16,
                  top: 16
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
  )
}
