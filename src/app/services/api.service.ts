import {Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Tournament} from "../models/tournament";
import {Fight} from "../models/fight";
import { Blog } from '../models/blog';
import {Fighter} from "../models/fighter";

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private httpClient:HttpClient){}

  getFighters():Observable<Fighter[]>
  {
    return this.httpClient.get<Fighter[]>("https://localhost:7116/api/fighters").pipe(retry(25),catchError(this.handleRequestError))
  }

  getFighterById(id:number):Observable<Fighter>
  {
    let url = 'https://localhost:7116/api/fighters/'+ id;

    return this.httpClient.get<Fighter>(url).pipe(retry(25),catchError(this.handleRequestError));
  }

  getFightersSortedByRating():Observable<Fighter[]>
  {
    return this.httpClient.get<Fighter[]>("https://localhost:7116/api/fighters/ratings").pipe(retry(25),catchError(this.handleRequestError))
  }

  getFightersSortedByPfpRating():Observable<Fighter[]>
  {
    return this.httpClient.get<Fighter[]>("https://localhost:7116/api/fighters/pfpratings").pipe(retry(25),catchError(this.handleRequestError))
  }

  getFutureTournaments():Observable<Tournament[]>
  {
    return this.httpClient.get<Tournament[]>("https://localhost:7116/api/Tournaments/future").pipe(retry(25),catchError(this.handleRequestError))
  }

  getEndedTournaments():Observable<Tournament[]>
  {
    return this.httpClient.get<Tournament[]>("https://localhost:7116/api/Tournaments/ended").pipe(retry(25),catchError(this.handleRequestError))
  }

  getNearTournament():Observable<Tournament>
  {
    return this.httpClient.get<Tournament>("https://localhost:7116/api/Tournaments/near").pipe(retry(25),catchError(this.handleRequestError))
  }

  getTournamentById(id:number):Observable<Tournament>
  {
    let url = 'https://localhost:7116/api/tournaments/'+ id;

    return this.httpClient.get<Tournament>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getFights(fighterId: number):Observable<any>
  {
    let url = 'https://localhost:7116/api/fights/'+fighterId;
    return this.httpClient.get<Fight>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  getBlogs():Observable<Blog[]>
  {
    return this.httpClient.get<Blog[]>("https://localhost:7116/api/blogs").pipe(retry(25),catchError(this.handleRequestError))
  }

  getBlogById(id:number):Observable<Blog>
  {
    let url = 'https://localhost:7116/api/blogs/'+ id;

    return this.httpClient.get<Blog>(url).pipe(retry(25),catchError(this.handleRequestError))
  }

  private handleRequestError()
  {
    return throwError(() => new Error("App didn't get response from the server. Try again!"));
  }
}
