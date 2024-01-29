import { ICoords } from '@/interfaces/ICoords';
import { ILocationUpdate, IQuestCompleted } from '@/interfaces/IEvent';
import { useEffect } from 'react';
import { useGameStore } from '../store/useGameStore';
import * as Location from 'expo-location';
import { useMapStore } from '../store/useMapStore';

let socket: null | WebSocket = null;

export const useSockets = () => {
  useEffect(() => {
    initializeWebSocket();

    return () => {
      closeWebSocket();
    };
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      updatePlayerPosition(location.coords);
    })();
  }, []);

  const updatePlayerPosition = (coordinates: ICoords) => {
    let updatePositionEvent: ILocationUpdate = {
      type: 'location_update',
      location: coordinates,
      user: {
        id: 0,
        username: 'Mike',
        avatar:
          'https://media.licdn.com/dms/image/D4E03AQEZcX3i65uV9g/profile-displayphoto-shrink_200_200/0/1681386993606?e=2147483647&v=beta&t=Rh0f_0hKja2gh4zuI1WFlOo2Tyu4gjlm8kTzD7zfy6Y',
      },
      game: 0,
      timestamp: new Date(),
    };

    socket?.send(JSON.stringify(updatePositionEvent));
  };

  const updateQuestCompleted = (photo: string) => {
    let updateQuestCompleted: IQuestCompleted = {
      type: 'quest_completed',
      user: {
        id: 0,
        username: 'Mike',
        avatar:
          'https://media.licdn.com/dms/image/D4E03AQEZcX3i65uV9g/profile-displayphoto-shrink_200_200/0/1681386993606?e=2147483647&v=beta&t=Rh0f_0hKja2gh4zuI1WFlOo2Tyu4gjlm8kTzD7zfy6Y',
      },
      game: 0,
      timestamp: new Date(),
      photo: photo,
    };

    socket?.send(JSON.stringify(updateQuestCompleted));
  };

  return { updateQuestCompleted, updatePlayerPosition };
};

function initializeWebSocket() {
  socket = new WebSocket('ws://192.168.1.99:5050/');

  // socket.onopen = () => {
  //   socket?.send(JSON.stringify(useGameStore.getState()));
  // };

  socket.onmessage = (event) => {
    const updatedState = JSON.parse(event.data);
    const state = useGameStore.getState();
    const setUpdatePopup = useMapStore.getState().setUpdatePopup;

    switch (updatedState.type) {
      case 'quest_completed':
        setUpdatePopup(updatedState);
        return;
      default:
        state.updateGameState({
          ...state,
          players: updatedState,
        });
        return;
    }
  };
}

function closeWebSocket() {
  socket?.close();
}
