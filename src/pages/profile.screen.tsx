import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import EditIcon from '@/assets/icons/edit.icon'

export const ProfileScreen = () => {
  return (
    <View>
      <View className='relative h-36 bg-primary'>
        <View className='absolute left-5 flex-row justify-start -bottom-5 gap-x-5 items-center'>
          <TouchableOpacity className='rounded-full border-2 border-white'>
            <Image 
              className='w-24 h-24 rounded-full'
              source={require('@/assets/default-avatar.jpg')}
            />
          </TouchableOpacity>
           <View className='-translate-y-1'>
              <Text className='text-secondary text-xl'>John Doe</Text>
              <Text className='text-secondary text-xs'>Пройдено квестов: 5</Text>
           </View>
        </View>
        <Pressable
          className='absolute bg-secondary p-2 right-5 -bottom-5 rounded-full'
          onPress={() => {}}
        >
          <EditIcon
            width={32}
            height={32}
            className='stroke-primary'
          />
        </Pressable>
      </View>
    </View>
  )
}
