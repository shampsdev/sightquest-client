import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

interface ICustomMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  src: ImageSourcePropType;
  extended: boolean;
  onPress: () => void;
}

export const CustomMarker = ({
  src,
  coordinate,
  extended,
  onPress,
}: ICustomMarkerProps) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={coordinate}
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
          source={src}
        />
        {extended && (
          <View className='h-fit w-24 bg-white p-5 rounded-lg top-10 pt-10 z-10 absolute'>
            <Text className='text-xs'>20m</Text>
          </View>
        )}
      </View>
    </Marker>
  );
};
