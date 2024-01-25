import { ICoords } from './ICoords';
import { IUser } from './IUser';

export interface IUserState {
  user: IUser;
  coordinates: ICoords;
  role: 'runner' | 'catcher';
}
