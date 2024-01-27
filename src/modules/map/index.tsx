import { usePlayerPosition } from '@/hooks/usePlayerPosition';
import { Platform, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
      style={styles.container}
      mapType={
        Platform.OS === 'ios' ? ('satelliteFlyover' as any) : 'satellite'
      }
      initialRegion={{
        latitude: 59.9311,
        longitude: 30.3609,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: 59.9311,
          longitude: 30.3609,
        }}
        image={require('@/assets/image.png')}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
