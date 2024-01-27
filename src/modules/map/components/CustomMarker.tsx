import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

export const CustomMarker = () => {
  return (
    <Marker
      coordinate={{
        latitude: 59.9311,
        longitude: 30.3609,
      }}
      className='flex justify-center items-center'
    >
      <Image
        className='w-16 h-16 rounded-full'
        source={require('@/assets/image2.jpg')}
      ></Image>
    </Marker>
  );
};
