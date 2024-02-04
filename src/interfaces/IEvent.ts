import { ICompletedTask } from './ICompletedTask';
import { ICoords } from './ICoords';
import { IGameState } from './IGameState';
import { ISettings } from './ISettings';

interface IEvent {
  user_id: number;
  event:
    | 'authorization'
    | 'location_update'
    | 'task_completed'
    | 'player_caught'
    | 'start_game'
    | 'settings_update'
    | 'status'
    | 'gamestate_update';
  timestamp: Date;
}

export interface ILocationUpdate extends IEvent {
  event: 'location_update';
  coordinates: ICoords;
}

export interface ITaskCompleted extends IEvent, ICompletedTask {
  event: 'task_completed';
}

export interface IPlayerCaught extends IEvent {
  event: 'player_caught';
  secret: string;
}

export interface ISettingsUpdate extends IEvent {
  event: 'settings_update';
  settings: ISettings;
}

export interface IAuthorization extends IEvent {
  event: 'authorization';
  token: string;
}

export interface IStartGame extends IEvent {
  event: 'start_game';
}

export interface IGamestateUpdate extends IEvent {
  event: 'gamestate_update';
  state: IGameState;
}

export interface IStatusUpdate extends IEvent {
  event: 'status';
  message: string;
}
