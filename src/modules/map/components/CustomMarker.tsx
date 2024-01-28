import { useState } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';

interface ICustomMarkerProps {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  src: ImageSourcePropType;
}

export const CustomMarker = ({ src, coordinate }: ICustomMarkerProps) => {
  const [expanded] = useState(true);

  return (
    <Marker
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
        {expanded == true ? (
          <View className='h-fit w-64 bg-white p-5 rounded-lg top-10 pt-10 z-10 absolute'>
            <Text>иди ко мне сладенький ;)</Text>
          </View>
        ) : (
          ''
        )}
      </View>
    </Marker>
  );
};
