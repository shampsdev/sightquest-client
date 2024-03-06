import { IQuestPoint } from './IQuestPoint';
import { ISettings } from './ISettings';
import { IUser } from './IUser';
import { IUserState } from './IUserState';

export interface IGameContext {
  lobby: {
    createLobby: () => Promise<string>;
    joinLobby: (code: string) => Promise<void>;
    leaveLobby: () => Promise<void>;
    code: string;
  };
  state: {
    startGame: () => void;
    markers: IQuestPoint[];
    players: IUserState[];
    lobby: string;
    settings: ISettings;
    state: 'LOBBY' | 'PLAYING' | 'ENDED';
    time_left: string;
  };
  settings: {
    updateQuestPoints: (points: IQuestPoint[]) => void;
    updateGameSettings: (settings: ISettings) => void;
  };
  game: {
    completeQuest: (picture: CameraCapturedPicture) => Promise<void>;
    catchPlayer: (code: string) => Promise<void>;
    requestCatch: (user: IUser) => Promise<void>;
  };
  player: IUserState | undefined;
  inRange: () => IUserState[];
}
