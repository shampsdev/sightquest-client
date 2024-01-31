import { IRules } from './IRules';
import { IUserState } from './IUserState';

export interface IGameState {
  id: number;
  players: IUserState[];
  time_left: Date;
  rules: IRules;
}
