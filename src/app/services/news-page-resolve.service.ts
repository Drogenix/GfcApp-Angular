import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Blog} from "../models/blog";

@Injectable({
  providedIn: 'root'
})
export class NewsPageResolveService implements Resolve<Blog>{

  constructor(private apiService:ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog>
  {
    const id = route.params['id'];

    return this.apiService.getBlogById(id);
  }
}
