import { CustomButton } from '@/components/ui/custom-button'
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import ProfileIcon from '@/assets/icons/profile.icon'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View className=''>
      <View className='items-center relative'>
        <View className='absolute top-10 h-12 w-full'>
          <View className='flex-row flex-1 items-center relative'>
            <TouchableOpacity
              className='absolute right-5'
              onPress={() => { navigation.navigate('ProfileScreen'); }}
            >
              <ProfileIcon
                className='stroke-primary'
                width={36}
                height={36}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className='top-1/2'>
          <View className='items-center gap-y-5'>
            <Image 
              className='w-56 h-56 rounded-full'
              source={require('@/assets/spas-na-krovi.jpg')}
            />
            <Text className='text-primary text-2xl'>Санкт-Петербург</Text>

            <View className='flex-row'>
              <CustomButton>
                Играть
              </CustomButton>
              <CustomButton type='secondary'>
                Играть
              </CustomButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
