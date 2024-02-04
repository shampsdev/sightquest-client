import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CustomText } from '@/components/ui/custom-text';
import { Layout } from '@/components/layout';
import { Section } from '@/components/section';
import { Border } from '@/components/border';
import { ScrollView } from 'react-native-gesture-handler';
import SwipeButton from '@/components/ui/swipe-button';
import { ScreenHeaderBack } from '@/components/screen-header-back';
import { useNavigation } from '@react-navigation/core';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { useGame } from '@/modules/game/hooks/useGame';

export const LobbyScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { lobby, state } = useGame();
  lobby.joinLobby('1M5J7EQO');

  return (
    <View className='h-full'>
      <ScrollView className='pt-10'>
        <ScreenHeaderBack />
        <Layout
          styles={{
            gap: 16,
            position: 'relative',
          }}
        >
          <Section text='Вы создали команду'>
            <View className='flex-row items-center'>
              <TouchableOpacity>
                <View className='h-20 w-20 rounded-3xl bg-primary' />
              </TouchableOpacity>
              {[1, 2, 3].map((_, indx) => (
                <View
                  key={indx}
                  className='w-16 h-16 border-2 border-black rounded-full -translate-x-2 bg-primary'
                />
              ))}
            </View>
          </Section>

          <Border
            styles={{
              backgroundColor: '#fefefe',
              gap: 4,
            }}
          >
            <Border
              styles={{
                position: 'relative',
                height: 120,
                width: '100%',
              }}
            >
              <CustomText
                styles={{
                  position: 'absolute',
                  bottom: 8,
                  left: 8,
                }}
                size='3xl'
              >
                1 :20 :59
              </CustomText>
            </Border>
            <View
              style={{
                gap: 4,
              }}
              className='flex-row justify-center'
            >
              <Border
                styles={{
                  width: '49%',
                  height: 120,
                }}
              >
                <CustomText size='lg'>Маршрут</CustomText>
              </Border>
              <Border
                styles={{
                  width: '49%',
                }}
              >
                <CustomText size='lg'>Сложность</CustomText>
              </Border>
            </View>
            <CustomText
              styles={{
                marginLeft: 4,
              }}
              size='lg'
            >
              #defeoi
            </CustomText>
          </Border>

          <Section text='Ваш маршрут'>
            <Border
              styles={{
                padding: 32,
              }}
            >
              <CustomText size='lg'>Василеостровский р-йон</CustomText>
            </Border>
          </Section>

          <Section
            styles={{
              gap: 12,
            }}
            text='Точки активности'
          >
            {[1, 2, 3].map((_, indx) => (
              <Border key={indx}>
                <View className='flex-row items-center justify-between px-5'>
                  <Border
                    styles={{
                      borderRadius: 12,
                      paddingHorizontal: 20,
                      backgroundColor: '#fefefe',
                    }}
                  >
                    <CustomText size='lg'>{`${indx + 1}`}</CustomText>
                  </Border>
                  <CustomText size='lg'>Спас на крови</CustomText>
                </View>
              </Border>
            ))}
          </Section>
        </Layout>
        <View className='h-36' />
      </ScrollView>
      <SwipeButton
        additionStyles={{
          position: 'absolute',
          bottom: 20,
        }}
        onToggle={async () => {
          state.updateGameStatus('playing');
          navigation.navigate('GameScreen');
        }}
      />
    </View>
  );
};
