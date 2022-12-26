import { IMAGE_BASE_PATH } from "../../../config";

export class Cast {
  constructor(cast) {
    this.cast = cast;

    this.id = cast.id;

    this.creditId = cast.credit_id;
    
    this.castId = cast.cast_id;
    
    this.adult = cast.adult;
    
    this.gender = cast.gender;
    
    this.knownForDepartment = cast.known_for_department;
    
    this.name = cast.name;
    
    this.originalName = cast.original_name;
    
    this.popularit = cast.popularit;
    
    this.profilePath = cast.profile_path? `${IMAGE_BASE_PATH}${cast.profile_path}`: '';
    
    this.character = cast.character;
    
    this.order = cast.order;
  }
}


