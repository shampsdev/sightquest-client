import { useGameStore } from '@/store/useGameStore';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export const Map = () => {
  useEffect(() => {
    initializeWebSocket();

    return () => {
      closeWebSocket();
    };
  }, []);

  return <MapView style={styles.container}></MapView>;
};

function initializeWebSocket() {
  let socket = new WebSocket('ws://localhost:8765/');

  socket.onopen = () => {
    socket.send(JSON.stringify(useGameStore.getState()));
  };

  socket.onmessage = (event) => {
    const updatedState = JSON.parse(event.data);
    console.log(updatedState);
    useGameStore.getState().updateGameState(updatedState);
  };
}
function closeWebSocket() {
  throw new Error('Function not implemented.');
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
