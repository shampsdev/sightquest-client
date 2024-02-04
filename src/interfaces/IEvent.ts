import { ICompletedTask } from './ICompletedTask';
import { ICoords } from './ICoords';
import { ISettings } from './ISettings';
import { IUser } from './IUser';

interface IEvent {
  user: IUser;
  event:
    | 'authorization'
    | 'location_update'
    | 'task_completed'
    | 'player_caught'
    | 'start_game'
    | 'settings_update';
  timestamp: Date;
}

export interface ILocationUpdate extends IEvent {
  event: 'location_update';
  location: ICoords;
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
