import { StyleSheet, View } from 'react-native';
import { Map } from '@/modules/map';

export const Main = () => {
  return (
    <View style={styles.container}>
      <Map>
        
      </Map>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
