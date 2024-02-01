import { ICoords } from './ICoords';
import { IUser } from './IUser';

interface IEvent {
  user: IUser;
  event: 'location_update' | 'quest_completed' | 'player_joined';
  timestamp: Date;
}

export interface ILocationUpdate extends IEvent {
  event: 'location_update';
  location: ICoords;
}

export interface IQuestCompleted extends IEvent {
  event: 'quest_completed';
  photo: string;
}