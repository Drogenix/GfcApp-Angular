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

  isComplete: boolean;

  winnerNum: number;

  winReason: string;

  firstEndRating: number;

  secondEndRating: number;

  round:number;

  date: Date;
}
