import SearchIcon from '@/assets/icons/search.icon'
import React from 'react'
import { View, ViewStyle } from 'react-native'
import { CustomText } from './ui/custom-text';
import { MiniLogoIcon } from '@/assets/icons/mini-logo.icon';

export const ScreenHeader = ({ styles }: {
  styles?: ViewStyle;
}) => {
  return (
    <View style={[{
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      justifyContent: 'space-between'
    }, styles]}>
      <View className='flex-row items-center'>
        <SearchIcon/>
        <CustomText>Санкт-Петербург</CustomText>
      </View>
      <MiniLogoIcon/>
    </View>
  )
}
