export interface Fighter
{
  id:number;

  sex:string;

  country:string;

  name:string;

  nickname:string;

  weight:string;

  position: number;

  statisticId: number;

  pictureUrl: string;

  win: number;

  lose: number;

  draw: number;

  winstreak: number;

  byknockout: number;

  firstRoundWins: number;

  totalHits: number;

  accurateHits: number;

  totalTakedowns: number;

  accurateTakedowns: number;

  winByKoTko: number;

  wInByDecision: number;

  winBySubmission: number;

}
