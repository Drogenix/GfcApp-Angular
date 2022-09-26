import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Fight} from "../models/fight";
import {Tournament} from "../models/tournament";

@Component({
  selector: 'app-app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.css']
})
export class AppFullCardComponent implements OnInit {

  tournament: Tournament;

  mainCard: Fight[] = [];

  prelimCard:Fight[]= [];

  earlyCard:Fight[]= [];

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.router.data.subscribe(({data})=> {

      this.tournament = data;

      const fights = this.tournament.fights;

      this.mainCard = fights.filter(fight => fight.card == 'Main');

      this.prelimCard = fights.filter(fight => fight.card == 'Prelim');

      this.earlyCard = fights.filter(fight => fight.card == 'Early');
    });

  }

  scrollToElement(id:string)
  {
    // @ts-ignore
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
