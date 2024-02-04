import PlusIcon from '@/assets/icons/plus.icon'
import { Section } from '@/components/section'
import { colors } from '@/constants/colors'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

const values = [1, 2, 3];

export const TeamPicker = () => {
  return (
    <Section text='Вы создали команду'>
      <View className='relative h-20'>
        <TouchableOpacity className='absolute z-50 left-0 bottom-0 h-20 w-20 rounded-3xl bg-primary'>
          <PlusIcon fill={colors.secondary} className='m-auto'/>
        </TouchableOpacity>
        { values.map((_, indx) => (
          <Image 
            source={require('@/assets/default-avatar.jpg')}
            key={indx} 
            style={{
              position: 'absolute',
              left: 20 + 48 * (indx + 1),
              bottom: 6,
              width: 64,
              height: 64,
              zIndex: values.length - indx,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: colors.primary,
            }}
        />)) }
      </View>
    </Section>
  )
}
