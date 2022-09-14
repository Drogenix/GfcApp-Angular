import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Fighter} from "../models/fighter";
import {ApiService} from "../services/api.service";
import {retry} from "rxjs";

@Component({
  selector: 'app-app-fighter-profile',
  templateUrl: './fighter-profile.component.html',
  styleUrls: ['./fighter-profile.component.css']
})
export class AppFighterProfileComponent {

  id: number;
  private sub: any;
  fighter: Fighter;

  constructor(private route:ActivatedRoute, private apiService: ApiService)
  {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];}); // (+) converts string 'id' to a number

    this.apiService.getFighterById(this.id).subscribe(response=> this.fighter = response.body);

  }


}
