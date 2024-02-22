import { IQuestPoint } from './IQuestPoint';

export interface ISettings {
  quest_points: IQuestPoint[];
  duration: string;
  mode: 'BASE';
}
