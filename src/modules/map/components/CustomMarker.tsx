import { Image } from 'react-native';
import { Marker } from 'react-native-maps';

export const CustomMarker = () => {
  return (
    <Marker
      coordinate={{
        latitude: 59.9311,
        longitude: 30.3609,
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 200
        }}
        source={require('@/assets/image2.jpg')}
      ></Image>
    </Marker>
  );
};
