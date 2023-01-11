import * as dotenv from 'dotenv' 
dotenv.config()

export class Crew {
  constructor(crew) {
    this.crew = crew;

    this.id = crew.id;

    this.creditId = crew.credit_id;
    
    this.adult = crew.adult;

    this.gender = crew.gender;

    this.knownForDepartment = crew.known_for_department;

    this.name = crew.name;

    this.originalName = crew.original_name;

    this.popularity = crew.popularity;

    // this.profilePath = cast.profile_path ? `${IMAGE_BASE_PATH}${cast.profile_path}`: '';
    this.profilePath = crew.profile_path;

    this.department = crew.department;

    this.job = crew.job;
  }
}

