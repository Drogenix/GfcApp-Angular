import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Fighter} from "../models/fighter";
import {Fight} from "../models/fight";

@Component({
  selector: 'app-app-fighter-profile',
  templateUrl: './fighter-profile.component.html',
  styleUrls: ['./fighter-profile.component.css']
})
export class AppFighterProfileComponent {

  fighter: Fighter;

  fighterHistory: Fight[] = [];

  constructor(private route:ActivatedRoute)
  {
    this.route.data.subscribe(({data})=> this.fighter = data);
    this.route.data.subscribe(({history})=>
    {
      if(history != null)
      this.fighterHistory = history
    });
  }

}
