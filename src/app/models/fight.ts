import {Fighter} from "./fighter";

export interface Fight
{
  id: number;

  number: number;

  tournamentId:number;

  card:string;

  isTitleFight: number;

  firstFighter: Fighter;

  secondFighter: Fighter;

  isComplete: number;

  winnerNum: number;

  winReason: number;

  firstEndRating: number;

  secondEndRating: number;

  date: Date;
}
