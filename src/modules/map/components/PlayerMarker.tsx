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
      className='flex justify-center items-center'
    >
      <View className='flex items-center'>
        <Image
          className='w-16 h-16 rounded-full m-2 border-4 z-20'
          // это плохо, но это тут так как nativewind кидает ошибку если сделать border-white
          style={{ borderColor: 'white' }}
          source={{ uri: user.avatar }}
        />
        {extended && (
          <Animated.View
            entering={FadeInLeft}
            exiting={FadeOutLeft}
            className='h-fit w-24 left-12 py-3 top-3 bg-white rounded-lg z-10 absolute'
          >
            <Text className='text-xs text-center leading-2'>{user.username}</Text>
            <Text className='text-[10px] text-center italic'>{role}</Text>
          </Animated.View>
        )}
      </View>
    </Marker>
  );
};
