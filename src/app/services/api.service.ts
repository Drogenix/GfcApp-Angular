import {Injectable} from '@angular/core';
import {map, Observable, of, retry, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Fighter} from "../models/fighter";
import {Tournament} from "../models/tournament";
import {Fight} from "../models/fight";

@Injectable({
  providedIn: 'root'
})
export class ApiService{

  constructor(private httpClient:HttpClient){}

  getFighters():Observable<any>
  {
    return this.httpClient.get("https://localhost:7116/api/fighters",{observe: "response"});
  }

  getFighterById(id:number):Observable<any>
  {
    var httpString = 'https://localhost:7116/api/fighters/'+ id;

    return this.httpClient.get(httpString,{observe: "response"});
  }

  getTournaments():Observable<any>
  {
    return this.httpClient.get<Tournament>("https://localhost:7116/api/Tournaments",{observe: "response"})
  }
  getTournamentById(id:number):Observable<any>
  {
    var httpString = 'https://localhost:7116/api/tournaments/'+ id;

    return this.httpClient.get<Tournament>(httpString,{observe: "response"})
  }

  getFights():Observable<any>
  {
    return this.httpClient.get<Fight>("https://localhost:7116/api/fights",{observe: "response"})
  }

}
