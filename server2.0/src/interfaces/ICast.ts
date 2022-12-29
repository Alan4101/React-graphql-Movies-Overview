import { IBaseCastAndCrew } from "./IBaseCastAndCrew"

export interface ICast extends IBaseCastAndCrew{
  castId: string
  character: String
  order: number
}