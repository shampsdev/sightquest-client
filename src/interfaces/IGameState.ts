import { ISettings } from './ISettings';
import { IUserState } from './IUserState';

export interface IGameState {
  id: number;
  players: IUserState[];
  time_left: Date;
  settings: ISettings;
  state: 'lobby' | 'playing' | 'ended';
}
