import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Fighter} from "../models/fighter";

@Injectable({
  providedIn: 'root'
})
export class RatingsResolveService implements Resolve<Fighter[]>{

  constructor(private apiService:ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Fighter[]>
  {
    return this.apiService.getFightersSortedByRating();
  }

}
