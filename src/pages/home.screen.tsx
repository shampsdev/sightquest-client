import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import React, { useCallback } from 'react';
import LeftArrowIcon from '@/assets/icons/left-arrow.icon';
import { ScreenHeader } from '@/components/screen-header';
import { Layout } from '@/components/layout';
import { CustomText } from '@/components/ui/custom-text';
import { Story } from '@/modules/stories/story';
import { Border } from '@/components/border';
import { Section } from '@/components/section';
import GroupIcon from '@/assets/icons/group.icon';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View className='pt-10'>
      <Layout styles={{
        gap: 16,
      }}>
        <ScreenHeader/>
        {/* <View className='flex-row'>
          { [1, 2, 3].map((value, indx) => <Story key={indx} text='Сторис'/>)  }
        </View>
        <Border>
          <CustomText size='2xl'>
            Привет, Виктор!
          </CustomText>
          <CustomText size='lg'>
            Готов играть в догонялки?
          </CustomText>
        </Border> */}

        {/* <Section text='Создать комнату'>
          <View className='flex-row justify-center gap-x-1'>
            <Border styles={{
              width: '49%'
            }}>
              <CustomText>Играть с друзьями</CustomText>
            </Border>
            <View style={{
              width: '49%'
            }}>
              <Border styles={{
                height: 140,
              }}>
                <CustomText>Одному/</CustomText>
              </Border>
              <Border styles={{
                marginTop: 4,
              }}>
                <CustomText>Ввести код</CustomText>
              </Border>
            </View>
          </View>
        </Section> */}

        {/* <Section text='Узнать больше'>
          <View className='flex-row'>
            <View className='h-96 w-4/5 bg-primary rounded-3xl relative'>
              <Border
                styles={{
                  backgroundColor: 'white',
                  position: 'absolute',
                  top: 8,
                  left: 8,
                }}
              >
                <CustomText
                  styles={{
                    flexDirection: 'row'
                  }}
                >Санкт-Петербург</CustomText>
              </Border>
              <Border
                styles={{
                  backgroundColor: 'white',
                  position: 'absolute',
                  gap: 10,
                  flexDirection: 'row',
                  bottom: 8, 
                  left: 8
                }}
              >
                <GroupIcon/>
                <CustomText>+147</CustomText>
              </Border>
            </View>
          </View>
        </Section> */}

        {/* <Section text='Топ маршрутов'>
          <View 
            className='flex-row'
            style={{
              gap: 8,
            }}
          >
            { [1, 2, 3].map((_, indx) => (
            <Border 
              styles={{
                height: 140,
                width: '60%',
                position: 'relative'
              }}
            >
              <Border
                styles={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  paddingBottom: 4, 
                  paddingTop: 4, 
                  paddingLeft: 12, 
                  paddingRight: 12,
                  top: 8,
                  left: 8,
                }}
              >
                <CustomText>
                  XXI
                </CustomText>
              </Border>

              <View
                className='absolute bottom-4 left-4 flex-row'
              >
                {
                ([1, 2, 3, 4,].map((_, indx) => (
                  <View key={indx} className='bg-secondary rounded-full w-6 h-6'/>
                  )))
                }
              </View>

              <Border>
                XXII
              </Border>
            </Border>)) }
          </View>
        </Section> */}
      </Layout>
    </View>
  );
};
