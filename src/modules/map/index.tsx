import { usePlayerPosition } from '@/hooks/usePlayerPosition';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { CustomMarker } from './components/';

export const Map = () => {
  const { updatePlayerPosition } = usePlayerPosition();

  return (
    <MapView
      onUserLocationChange={(event) => {
        let coords = event.nativeEvent.coordinate;
        updatePlayerPosition({
          longitude: coords?.longitude ?? 0,
          latitude: coords?.latitude ?? 0,
        });
      }}
      showsUserLocation={true}
      className='h-full w-full'
      initialRegion={{
        latitude: 59.9311,
        longitude: 30.3609,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <CustomMarker />
    </MapView>
  );
};
