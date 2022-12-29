import * as dotenv from "dotenv";
import { ICrew } from "../interfaces";
dotenv.config();

// const IMAGE_BASE_PATH = process.env.IMAGE_BASE_PATH!;

export class Crew implements ICrew {
  id: any;
  creditId: any;
  adult: any;
  gender: any;
  knownForDepartment: any;
  name: any;
  originalName: any;
  popularity: any;
  profilePath: any;
  department: any;
  job: any;
  popularit: number;

  constructor(crew: any) {
    this.id = crew.id;

    this.creditId = crew.credit_id;

    this.adult = crew.adult;

    this.gender = crew.gender;

    this.knownForDepartment = crew.known_for_department;

    this.name = crew.name;

    this.originalName = crew.original_name;

    this.popularit = crew.popularit;

    // this.profilePath = cast.profile_path ? `${IMAGE_BASE_PATH}${cast.profile_path}`: '';
    this.profilePath = crew.profile_path;

    this.department = crew.department;

    this.job = crew.job;
  }
}
