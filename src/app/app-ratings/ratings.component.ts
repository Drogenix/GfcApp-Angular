import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Fighter} from "../models/fighter";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class AppRatingsComponent implements OnInit {

  lightweightRating: Fighter[] = [];

  welterweightRating: Fighter[] = [];

  featherweightRating: Fighter[] = [];

  pfpRating: Fighter[] = [];

  constructor(private router:ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.router.data.subscribe(({data})=>{

      const fighters = data;

      if(fighters != null)
      {
        // @ts-ignore
        this.welterweightRating = fighters.filter(fighter=> fighter.weight == 'Welterweight');

        // @ts-ignore
        this.lightweightRating = fighters.filter(fighter=> fighter.weight == 'Lightweight');

        // @ts-ignore
        this.featherweightRating = fighters.filter(fighter=> fighter.weight == 'Featherweight');
      }
    })

    this.apiService.getFightersSortedByPfpRating().subscribe(data=> this.pfpRating = data)
  }

}
