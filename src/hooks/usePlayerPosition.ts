import { ICoords } from '@/interfaces/ICoords';
import { ILocationUpdate } from '@/interfaces/IEvent';
import { useGameStore } from '@/store/useGameStore';
import { useEffect } from 'react';

let socket: null | WebSocket = null;

export const usePlayerPosition = () => {
  useEffect(() => {
    initializeWebSocket();

    return () => {
      closeWebSocket();
    };
  }, []);

  const updatePlayerPosition = (coordinates: ICoords) => {
    let updatePositionEvent: ILocationUpdate = {
      type: 'location_update',
      location: coordinates,
      user: {
        id: 0,
        username: '',
        avatar: '',
      },
      game: 0,
      timestamp: new Date(),
    };

    socket?.send(JSON.stringify(updatePositionEvent));
  };

  return { updatePlayerPosition };
};

function initializeWebSocket() {
  // socket = new WebSocket('wss://ws.postman-echo.com/raw');
  socket = new WebSocket('ws://localhost:8762');

  socket.onopen = () => {
    socket?.send(JSON.stringify(useGameStore.getState()));
  };

  socket.onmessage = (event) => {
    const updatedState = JSON.parse(event.data);
    console.log(updatedState);
    useGameStore.getState().updateGameState(updatedState);
  };
}

function closeWebSocket() {
  socket?.close()
}
