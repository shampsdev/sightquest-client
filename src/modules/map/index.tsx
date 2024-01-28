import MapView from 'react-native-maps';
import { CustomMarker } from './components/CustomMarker';
import { Popup } from './components/Popup';
import { useGameStore } from './store/useGameStore';
import { useMapStore } from './store/useMapStore';

export const Map = () => {
  const markers = useGameStore((store) => store.rules.quest_points);
  const [questPoint, setQuestPoint] = useMapStore((store) => [
    store.slected_quest_point,
    store.setSelectedQuestPoint,
  ]);

  // const { updatePlayerPosition } = usePlayerPosition();

  return (
    <>
      <MapView
        onUserLocationChange={(event) => {
          let coords = event.nativeEvent.coordinate;
          // updatePlayerPosition({
          //   longitude: coords?.longitude ?? 0,
          //   latitude: coords?.latitude ?? 0,
          // });
        }}
        showsUserLocation={true}
        className='h-full w-full'
        initialRegion={{
          latitude: 59.9311,
          longitude: 30.3609,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsCompass={false}
      >
        {markers.map((x, index) => (
          <CustomMarker
            key={index}
            extended={index == 0}
            onPress={() => {
              setQuestPoint(x);
            }}
            coordinate={x.location}
            src={{ uri: x.photo }}
          />
        ))}
      </MapView>
      {questPoint && <Popup questPoint={questPoint} />}
    </>
  );
};
