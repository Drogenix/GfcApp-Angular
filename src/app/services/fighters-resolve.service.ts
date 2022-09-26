import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Fighter} from "../models/fighter";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class FightersResolveService implements Resolve<Fighter[]>{

  constructor(private apiService:ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Fighter[]>
  {
    return this.apiService.getFighters();
  }
}
