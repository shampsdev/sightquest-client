import { MiniLogoIcon } from '@/assets/icons/mini-logo.icon'
import SearchIcon from '@/assets/icons/search.icon'
import React from 'react'
import { Text, View } from 'react-native'

export const ScreenHeader = () => {
  return (
    <View className='flex-row items-center mb-5 justify-between'>
      <View className='flex-row items-center'>
        <SearchIcon/>
        <Text style={{ fontFamily: 'font' }}>Санкт-Петербург</Text>
      </View>
      <MiniLogoIcon/>
    </View>
  )
}
