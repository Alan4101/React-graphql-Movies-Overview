import { ICast } from "./ICast";
import { ICrew } from "./ICrew";

export interface ICredits {
  id: string;
  cast: ICast[];
  crew: ICrew[];
}
