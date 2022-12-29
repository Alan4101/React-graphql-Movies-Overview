import * as dotenv from "dotenv";
import { ICast } from "../interfaces";

dotenv.config();
const IMAGE_BASE_PATH = process.env.IMAGE_BASE_PATH!;

export class Cast implements ICast{
  castId: string;
  character: String;
  order: number;
  id: string;
  creditId: string;
  adult: boolean;
  gender: number;
  knownForDepartment: string;
  name: string;
  originalName: string;
  popularit: number;
  profilePath: string;
  
  constructor(cast: any) {

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


