import { ICoords } from '@/interfaces/ICoords';
import { useGameStore } from '../store/useGameStore';
import { useSockets } from './useSockets';
import { API_URL, WS_URL } from '@env';
import { IGameState } from '@/interfaces/IGameState';
import axios, { AxiosResponse } from 'axios';
import { useMapStore } from '../store/useMapStore';

export const useGame = () => {
  const sockets = useSockets();
  const gameState = useGameStore((store) => store);
  const mapState = useMapStore((store) => store);

  const createLobby = async () => {
    const res = await axios.post<
      IGameState,
      AxiosResponse<IGameState, IGameState>
    >(`${API_URL}/games/`, {
      players: [1],
      tasks: [1],
      settings: 1,
      started_at: '2024-01-31T16:11:48.783Z',
      ended_at: '2024-01-31T16:11:48.783Z',
      state: 'LOBBY',
    });

    return res.data.id;
  };

  const joinLobby = (id: number) => {
    sockets.connect(`${WS_URL}/ws/lobby/${id}/`);
  };

  const parseIncomingMessage = (event: WebSocketMessageEvent) => {
    const updatedState = JSON.parse(event.data);

    switch (updatedState.type) {
      case 'quest_completed':
        mapState.setUpdatePopup(updatedState);
        break;
      default:
        gameState.updateGameState({
          ...gameState,
          players: updatedState,
        });
    }
  };

  sockets.receive(parseIncomingMessage);

  const updatePlayerPosition = (coordinates: ICoords) => {
    sockets.send(JSON.stringify(coordinates));
  };

  const updateQuestCompleted = (photo: string) => {
    sockets.send(photo);
  };

  return {
    lobby: {
      createLobby,
      joinLobby,
    },
    state: {
      updateQuestCompleted,
      updatePlayerPosition,
      markers: gameState.rules.quest_points,
      players: gameState.players,
    },
    ui: {
      questPoint: mapState.slected_quest_point,
      setQuestPoint: mapState.setSelectedQuestPoint,
      updatePopup: mapState.update_popup,
    },
  };
};
