import { Component, OnInit } from '@angular/core';
import {Fighter} from "../models/fighter";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-app-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.css']
})
export class AppFightersComponent implements OnInit{

  fighters: Fighter[]= [];

  displayingFighters: Fighter[] = []

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit()
  {
     this.activatedRoute.data.subscribe(({data})=> {
       this.fighters = data;

       this.displayingFighters = this.fighters;
     });
  }

  getLightweight()
  {
    this.displayingFighters = this.fighters.filter(fighter=> fighter.weight == 'Lightweight')
    this.sortByRating();
  }
  getWelterweight()
  {
    this.displayingFighters = this.fighters.filter(fighter=> fighter.weight == 'Welterweight')
    this.sortByRating();
  }
  getFeatherweight()
  {
    this.displayingFighters = this.fighters.filter(fighter=> fighter.weight == 'Featherweight')
    this.sortByRating();
  }

  private sortByRating()
  {
    this.displayingFighters.sort((x,y) => {
      if (x.rating > y.rating) {
        return 1;
      }

      if (x.rating < y.rating) {
        return -1;
      }
      return 0;
    });
  }

}
