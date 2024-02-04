import { IUserState } from '@/interfaces/IUserState';
import { View, Image, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import Animated, { FadeInLeft, FadeOutLeft } from 'react-native-reanimated';

export const PlayerMarker = ({
  coordinates,
  user,
  role,
  extended,
}: IUserState & { extended: boolean }) => {
  return (
    <Marker
      coordinate={coordinates}
      style={{
        transform: [{ scale: 1 }],
      }}
    >
      <View className='flex'>
        <Image
          className='w-16 h-16 rounded-full m-2 border-4 z-20'
          // это плохо, но это тут так как nativewind кидает ошибку если сделать border-white
          style={{ borderColor: 'white' }}
          source={
            { uri: user.avatar } ?? require('@/assets/default-avatar.jpg')
          }
        />
        {extended && (
          <Animated.View
            entering={FadeInLeft}
            exiting={FadeOutLeft}
            className='h-34 w-52 bg-white py-2 px-3 rounded-3xl -left-2 bottom-11 z-10 absolute'
          >
            <View className='flex flex-row items-center justify-between'>
              <Text className='text-lg'>{user.username}</Text>
              <Text className='text-lg text-slate-700'>(2.4 km)</Text>
            </View>
            <Text className='text-lg text-slate-700 pb-5'>
              {role == 'catcher' ? 'ловец' : 'бегун'}
            </Text>
          </Animated.View>
        )}
      </View>
    </Marker>
  );
};
