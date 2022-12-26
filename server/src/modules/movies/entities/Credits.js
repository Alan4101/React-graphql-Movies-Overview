import { Cast } from "./Cast";
import { Crew } from "./Crew";

export class Credits {
  constructor(credits) {
    this.credits = credits;
    this.id = credits.id;
    this.cast = credits.cast.map((item) => new Cast(item));
    this.crew = credits.crew.map((item) => new Crew(item));
  }
}
