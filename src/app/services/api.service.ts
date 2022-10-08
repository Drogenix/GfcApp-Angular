import {Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Tournament} from "../models/tournament";
import {Fight} from "../models/fight";
import { Blog } from '../models/blog';
import {Fighter} from "../models/fighter";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  private _apiUrl = environment.apiUrl;

  constructor(private httpClient:HttpClient){}

  getFighters():Observable<Fighter[]>
  {
    const url = this._apiUrl+'fighters';

    return this.httpClient.get<Fighter[]>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getFighterById(id:number):Observable<Fighter>
  {
    const url = this._apiUrl+'fighters/'+ id;

    return this.httpClient.get<Fighter>(url).pipe(retry(25),catchError(this.handleRequestError));
  }

  getFightersSortedByRating():Observable<Fighter[]>
  {
    const url = this._apiUrl+'fighters/ratings';

    return this.httpClient.get<Fighter[]>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getFightersSortedByPfpRating():Observable<Fighter[]>
  {
    const url = this._apiUrl+'fighters/pfpratings';

    return this.httpClient.get<Fighter[]>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getFutureTournaments():Observable<Tournament[]>
  {
    const url = this._apiUrl+'Tournaments/future';

    return this.httpClient.get<Tournament[]>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getEndedTournaments():Observable<Tournament[]>
  {
    const url = this._apiUrl+'Tournaments/ended';


    return this.httpClient.get<Tournament[]>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getNearTournament():Observable<Tournament>
  {
    const url = this._apiUrl+'Tournaments/near';

    return this.httpClient.get<Tournament>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getTournamentById(id:number):Observable<Tournament>
  {
    const url = this._apiUrl + 'tournaments/'+ id;

    return this.httpClient.get<Tournament>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getFights(fighterId: number):Observable<any>
  {
    const url = this._apiUrl + 'fights/'+fighterId;

    return this.httpClient.get<Fight>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getBlogs():Observable<Blog[]>
  {
    const url = this._apiUrl + 'blogs';

    return this.httpClient.get<Blog[]>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getBlogById(id:number):Observable<Blog>
  {
    const url = this._apiUrl + 'blogs/'+ id;

    return this.httpClient.get<Blog>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  private handleRequestError()
  {
    return throwError(() => new Error("App didn't get response from the server. Try again!"));
  }
}
