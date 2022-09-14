import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Fight} from "../models/fight";
import {Tournament} from "../models/tournament";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.css']
})
export class AppFullCardComponent implements OnInit {

  id:number;

  tournament: Tournament;

  mainCard: Fight[];

  prelimCard:Fight[];

  earlyCard:Fight[];

  private sub:any;

  constructor(private apiService:ApiService, private route: ActivatedRoute, private scroll: ViewportScroller) { }

  ngOnInit(): void
  {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];}); // (+) converts string 'id' to a number

    this.apiService.getTournamentById(this.id).subscribe(response=> {

      this.tournament = response.body

      const fights = this.tournament.fights;

      this.mainCard = fights.filter(fight => fight.card == 'Main');

      this.prelimCard = fights.filter(fight => fight.card == 'Prelim');

      this.earlyCard = fights.filter(fight => fight.card == 'Early');
    });

  }

}
