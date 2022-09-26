import { Component, OnInit } from '@angular/core';
import {Tournament} from "../models/tournament";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class AppTournamentsComponent implements OnInit {

  futureTournaments: Tournament[] = [];

  endedTournaments: Tournament[] = [];

  tournamentsToShow: Tournament[] = [];

  isFutureTrnmtsShowing: boolean;

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void
  {
    this.router.data.subscribe(({future}) => {

      if(future != null)
      {
        this.futureTournaments = future;
        this.tournamentsToShow =this.futureTournaments.slice(0,5);
      }

      this.isFutureTrnmtsShowing = true;
    });
    this.router.data.subscribe(({ended}) => {
      if(ended != null)
        this.endedTournaments = ended;
    });

  }
  showFutureTournaments()
  {
    if(this.isFutureTrnmtsShowing) return;

    this.tournamentsToShow = this.futureTournaments.slice(0,5);
    this.isFutureTrnmtsShowing = true;
  }
  showEndedTournaments()
  {
    if(!this.isFutureTrnmtsShowing) return;

    this.tournamentsToShow = this.endedTournaments.slice(0,5);
    this.isFutureTrnmtsShowing = false;
  }
  showMore()
  {
    if(this.isFutureTrnmtsShowing)
    {
      this.tournamentsToShow = this.futureTournaments.slice(0, this.tournamentsToShow.length + 5);
    }
    else
    {
      this.tournamentsToShow = this.endedTournaments.slice(0, this.tournamentsToShow.length + 5);
    }
  }
}
