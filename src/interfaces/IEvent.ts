import { ICoords } from './ICoords';
import { IUser } from './IUser';

interface IEvent {
  user: IUser;
  type: 'location_update' | 'quest_completed';
  game: number;
  timestamp: Date;
}

export interface ILocationUpdate extends IEvent {
  type: 'location_update';
  location: ICoords;
}

export interface IQuestCompleted extends IEvent {
  type: 'quest_completed';
  photo: string;
}
