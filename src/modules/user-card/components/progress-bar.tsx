import VelocityIcon from '@/assets/icons/velocity.icon'
import React from 'react'
import { View } from 'react-native'

export const ProgressBar = () => {
  return (
    <View
      className='row items-center h-12 bg-secondary flex-grow-1'
    >
      <VelocityIcon/>
      <></>
    </View>
  )
}
