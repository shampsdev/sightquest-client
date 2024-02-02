import { ICoords } from './ICoords';
import { IQuestPoint } from './IQuestPoint';
import { IUser } from './IUser';

export interface IUserState {
  user: IUser;
  coordinates: ICoords;
  role: 'runner' | 'catcher';
  completed: IQuestPoint[];
  secret: string;
}
