import { ISettings } from './ISettings';
import { IUserState } from './IUserState';

export interface IGameState {
  code: string;
  players: IUserState[];
  time_left: string;
  settings: ISettings;
  state: 'LOBBY' | 'PLAYING' | 'ENDED';
}
