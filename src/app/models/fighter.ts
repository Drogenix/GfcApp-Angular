export interface Fighter
{
  id:number;

  sex:string;

  country:string;

  name:string;

  secondName:string;

  nickname:string;

  weight:string;

  rating: number;

  pfprating: number;

  statisticId: number;

  pictureUrl: string;

  profilePictureUrl: string;

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
