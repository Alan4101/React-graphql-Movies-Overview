import { ICast, ICrew } from "../interfaces";
import { ICredits } from "./../interfaces/ICredits";
import { Cast } from "./Cast";
import { Crew } from "./Crew";

export class Credits implements ICredits {
  id: string;
  cast: ICast[];
  crew: ICrew[];
  constructor(credits: any) {
    this.id = credits.id;
    this.cast = credits.cast.map((item: any) => new Cast(item));
    this.crew = credits.crew.map((item: any) => new Crew(item));
  }
}
