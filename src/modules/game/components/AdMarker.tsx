import { Image, ImageSourcePropType } from 'react-native';
import { Marker } from 'react-native-maps';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

interface IAdMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  src: ImageSourcePropType;
  extended: boolean | (() => boolean);
  onPress: () => void;
}

export const AdMarker = ({
  src,
  coordinate,
  extended,
  onPress,
}: IAdMarkerProps) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={coordinate}
      className='flex justify-center items-center'
    >
      {extended && (
        <Animated.View
          entering={FadeInUp}
          exiting={FadeOutUp}
          className='bg-white p-1 rounded-xl z-10 absolute'
        >
          <Image
            className='h-24 w-48 rounded-lg'
            // это плохо, но это тут так как nativewind кидает ошибку если сделать border-white
            style={{
              borderColor: 'white',
            }}
            source={src}
          />
        </Animated.View>
      )}
    </Marker>
  );
};
