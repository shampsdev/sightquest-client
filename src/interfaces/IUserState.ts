import { ICompletedTask } from './ICompletedTask';
import { ICoords } from './ICoords';
import { IUser } from './IUser';

export interface IUserState {
  user: IUser;
  coordinates: ICoords;
  role: 'RUNNER' | 'CATCHER';
  completed: ICompletedTask[];
  secret: string;
}
