import { Section } from '@/components/section'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigation/root-navigator';
import { CustomText } from '@/components/ui/custom-text';
import { toast, ToastPosition } from '@backpackapp-io/react-native-toast';
import { Border } from '@/components/border';
import PlusIcon from '@/assets/icons/plus.icon';

const sizeOfLobbyId = 6;

const toastStyle = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#AEADAD',
    fontFamily: 'Inter-Black',
  }
})

export const CreateRoom = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [lobbyId, setLobbyId] = useState<string>('');

  const connectToLobby = () => {
    const lobbyForConnection = lobbyId.slice(1, lobbyId.length);

    if (lobbyForConnection.length !== sizeOfLobbyId) {
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
            () => connectToLobby()
          }
          className='bg-primary relative rounded-3xl p-3 w-[49%]'
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
              bottom: 16
            }}
            size='lg'
          >
            Играть с друзьями
          </CustomText>
        </TouchableOpacity>
        <View style={{
          width: '49%'
        }}>
          <Border styles={{
            height: 140,
            position: 'relative'
          }}>
            <CustomText size='lg' styles={{
              position: 'absolute',
              right: 16,
              top: 16,
            }}>Одному/</CustomText>
            <CustomText size='lg' styles={{
              position: 'absolute',
              left: 16,
              bottom: 16,
            }}>/Одной</CustomText>
            <PlusIcon
              style={{
                position: 'absolute',
                left: 16,
                top: 16
              }}
            />
          </Border>
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
