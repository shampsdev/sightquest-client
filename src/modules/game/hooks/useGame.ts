import { ICoords } from '@/interfaces/ICoords';
import { useGameStore } from '../store/useGameStore';
import { useSockets } from './useSockets';
import { API_URL, WS_URL } from '@env';
import { IGameState } from '@/interfaces/IGameState';
import axios, { AxiosResponse } from 'axios';
import { useMapStore } from '../store/useMapStore';
import { ILocationUpdate, IQuestCompleted } from '@/interfaces/IEvent';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export const useGame = () => {
  const sockets = useSockets();
  const gameState = useGameStore((store) => store);
  const mapState = useMapStore((store) => store);
  const { user } = useAuth();
  if (user == null) throw Error('Cannot use game, user is null.');

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

  const joinLobby = async (id: number) => {
    await sockets.connect(`${WS_URL}/ws/game/${id}/`);
    sockets.send(
      JSON.stringify({
        event: 'authorization',
        token: user.id,
      })
    );
  };

  const parseIncomingMessage = (event: WebSocketMessageEvent) => {
    const updatedState = JSON.parse(event.data);

    switch (updatedState.event) {
      case 'quest_completed':
        mapState.setUpdatePopup(updatedState);
        break;
      case 'location_update':
        gameState.updatePlayerPosition(
          updatedState.user,
          updatedState.location
        );
        break;
    }
  };

  sockets.receive(parseIncomingMessage);

  const updatePlayerPosition = (coordinates: ICoords) => {
    const locationUpdate: ILocationUpdate = {
      event: 'location_update',
      user: user,
      timestamp: new Date(),
      location: coordinates,
    };

    sockets.send(JSON.stringify(locationUpdate));
  };

  const updateQuestCompleted = (photo: string) => {
    const updateQuestCompleted: IQuestCompleted = {
      event: 'quest_completed',
      user: user,
      timestamp: new Date(),
      photo: photo,
    };

    sockets.send(JSON.stringify(updateQuestCompleted));
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
    player: gameState.players.find((x) => x.user.id == user.id),
  };
};
