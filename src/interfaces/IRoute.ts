import { IQuestPoint } from './IQuestPoint';

export interface IRoute {
  id: number;
  title: string;
  complexity: number;
  popularity: number;
  quest_points: IQuestPoint[];
}
