import {Fight} from "./fight";

export interface Tournament
{
  id: number;

  number: number;

  startDate: Date;

  place: string;

  fights: Fight[];

  isComplete: boolean;

  pictureUrl: string;

  title:string;
}
