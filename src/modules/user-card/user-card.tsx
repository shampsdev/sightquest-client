import { Border } from '@/components/border'
import React from 'react'
import { View } from 'react-native'
import { ProgressBar } from './components/progress-bar'

export const UserCard = () => {
  return (
    <Border>
      <View style={{
        gap: 16
      }} className='w-5/6 mx-auto flex-row items-center'>
        <View>
          <View className='w-12 h-12 bg-secondary rounded-full'/>
        </View>

        <View>
          <ProgressBar/>
        </View>
      </View>
    </Border>
  )
}
