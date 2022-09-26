import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Tournament} from "../models/tournament";

@Injectable({
  providedIn: 'root'
})
export class EndedTournamentsResolveService implements Resolve<Tournament[]>{
  constructor(private apiService:ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tournament[]>
  {
    return this.apiService.getEndedTournaments();
  }
}
