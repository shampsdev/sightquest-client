import { StyleSheet, View } from 'react-native';
import { Map } from '@/modules/map';
import { Navigation } from './modules/navigation';

export const Main = () => {
  return (
    <View style={styles.container}>
      <Map></Map>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
