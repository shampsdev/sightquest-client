import { CoinsIcon } from '@/assets/icons/coins.icon'
import SpeedIcon from '@/assets/icons/speed.icon'
import TimeIcon from '@/assets/icons/time.icon'
import { Border } from '@/components/border'
import { CharacteristicBar } from '@/components/ui/characteristic-bar'
import { CustomText } from '@/components/ui/custom-text'
import { colors } from '@/constants/colors'
import React from 'react'
import { View, Image } from 'react-native'

export const UserCard = () => {
  return (
    <Border
      styles={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 12,
        backgroundColor: colors.secondary
      }}
    >
      <View className='items-center'>
        <Image 
          source={require('@/assets/default-avatar.jpg')}
          className='w-12 h-12 bg-primary rounded-full'
        />
        <CustomText styles={{
          width: 64,
          textAlign: 'center',
          color: colors.primary,
        }}>Иванов Витя</CustomText>
      </View>
      
      <View style={{
        width: '80%',
        gap: 12
      }}>

        <CharacteristicBar
          styles={{
            width: '100%',
          }}
          amount={5}
          total={10} 
          icon={<SpeedIcon/>}        
        />

        <CharacteristicBar
          styles={{
            width: '100%',
          }}
          amount={5}
          total={10} 
          icon={<TimeIcon/>}        
        />

        <CharacteristicBar
          styles={{
            width: '100%',
          }}
          amount={1}
          total={10} 
          icon={<CoinsIcon/>}        
        />
      </View>
    </Border>
  )
}
