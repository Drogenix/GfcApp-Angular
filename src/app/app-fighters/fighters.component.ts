import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Fighter} from "../models/fighter";

@Component({
  selector: 'app-app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class AppFightersComponent implements OnInit{

  fighters: Fighter[]= [];

  constructor(private apiService:ApiService) {}

  ngOnInit()
  {
    this.apiService.getFighters().subscribe(response => this.fighters = response.body);
  }

}
