import { IQuestPoint } from "./IQuestPoint";

export interface IRoute {
  title: string;
  complexity: number;
  popularity: number;
  questPoints: IQuestPoint[];
  description: string;
}