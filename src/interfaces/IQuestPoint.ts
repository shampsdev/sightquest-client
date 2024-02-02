import { ICoords } from './ICoords';
import { IQuestTask } from './IQuestTask';

export interface IQuestPoint {
  location: ICoords;
  description: string;
  title: string;
  photo: string;
  tasks: IQuestTask[];
}
