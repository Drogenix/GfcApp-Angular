import {Fight} from "./fight";

export interface Tournament
{
  id: number;

  date: Date;

  place: string;

  fights: Fight[];

  isComplete: number;

  pictureUrl: string;
}
