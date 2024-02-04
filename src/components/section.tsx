import React from 'react'
import { CustomText } from './ui/custom-text'
import { View, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '@/styles/global.style';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';

type ISection = {
  text?: string; 
  children: React.ReactNode
  to?: keyof RootStackParamList;
  openAll?: boolean;
  styles?: ViewStyle;
}

export const Section = ({ text, children, styles, openAll, to }: ISection) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles}>
      {
        openAll 
        ? 
        <View className='flex-row items-center mb-3 justify-between'>
          <CustomText size='lg' styles={{
          }}>{ text }</CustomText>
          <TouchableOpacity
            onPress={ () => navigation.navigate(to as keyof RootStackParamList) }
            style={[globalStyles.border, {
              paddingVertical: 5,
            }]}
          >
            <CustomText>
              Все
            </CustomText>
          </TouchableOpacity>   
        </View>
        :
        <CustomText size='lg' styles={{
          marginBottom: 12,
        }}>{ text }</CustomText>
      }
      { children }
    </View>
  )
}
