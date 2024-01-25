import { StyleSheet, View, Animated } from 'react-native';

export const Navigation = () => {
  return <View style={styles.navigation}></View>;
};

const styles = StyleSheet.create({
  navigation: {
    height: 90,
    right: 25,
    left: 25,
    bottom: 25,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
});
