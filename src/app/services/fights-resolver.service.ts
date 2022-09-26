import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Fight} from "../models/fight";

@Injectable({
  providedIn: 'root'
})
export class FightsResolveService implements Resolve<Fight[]>{

  constructor(private apiService:ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Fight[]>
  {
    const id = route.params['id'];

    return this.apiService.getFights(id);
  }
}
