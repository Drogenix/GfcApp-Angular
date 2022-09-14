import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Tournament} from "../models/tournament";

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class AppTournamentsComponent implements OnInit {

  tournaments: Tournament[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void
  {
    this.apiService.getTournaments().subscribe(response => {
      this.tournaments = response.body;
    });
  }

}
