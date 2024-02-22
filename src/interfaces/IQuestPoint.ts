import { ICoords } from './ICoords';
import { IQuestTask } from './IQuestTask';

export interface IQuestPoint {
  id: number;
  location: ICoords;
  description: string;
  title: string;
  image: string;
  city: number;
  tasks: IQuestTask[];
}
