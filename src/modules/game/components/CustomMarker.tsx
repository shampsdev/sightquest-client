import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

interface ICustomMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  src: ImageSourcePropType;
  extended: boolean | (() => boolean);
  distance: number;
  onPress: () => void;
}

export const CustomMarker = ({
  src,
  coordinate,
  extended,
  distance,
  onPress,
}: ICustomMarkerProps) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={coordinate}
      className='flex justify-center items-center'
    >
      <View className='flex items-center'>
        <Image
          className='w-16 h-16 rounded-full m-2 border-4 z-20'
          // это плохо, но это тут так как nativewind кидает ошибку если сделать border-white
          style={{
            borderColor: 'white',
          }}
          source={src}
        />
        {extended && (
          <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
            className='h-fit w-24 bg-white p-3 rounded-lg top-10 pt-8 z-10 absolute'
          >
            <Text className='text-xs text-center'>{distance.toFixed(2)}km</Text>
          </Animated.View>
        )}
      </View>
    </Marker>
  );
};
