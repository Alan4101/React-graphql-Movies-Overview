import { IBaseCastAndCrew } from "./IBaseCastAndCrew";

export interface ICrew extends IBaseCastAndCrew {
  department: string;
  job: string;
}
