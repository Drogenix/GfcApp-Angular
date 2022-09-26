import {Component, OnInit} from '@angular/core';
import {Tournament} from "../models/tournament";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.css']
})
export class AppMainComponent implements OnInit{

  nearTournament: Tournament;

  hours:number;

  minutes:number;

  seconds:number;

  isTimerTick:boolean;

  isEventStarted:boolean;

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(({data}) => {
      this.nearTournament = data;

      let eventStartDate = this.nearTournament.startDate.toString();

      const timeDifference = this.getValidDate(eventStartDate)

      this.convertMsToTime(timeDifference);

      if(timeDifference > 0 && this.hours < 72)
      {
        this.startTimer();

        this.isTimerTick = true;
        this.isEventStarted = false;
      }
      else if(this.hours>72)
      {
        this.isTimerTick = false;
        this.isEventStarted = false;
      }
      else
      {
        this.isEventStarted = true;
      }
    });
  }


  private startTimer()
  {
    let timer = setInterval(()=>
    {
      if((this.hours <= 0) && (this.minutes <= 0) && (this.seconds <= 0))
      {
        this.isTimerTick = false;
        clearInterval(timer);
      }
      this.seconds-=1;
      if(this.seconds == -1)
      {
        this.minutes -=1;
        this.seconds = 59;
      }
      if(this.minutes == -1)
      {
        this.hours -=1;
        this.minutes = 59;
      }

    }, 1000)

  }

  private getValidDate(dateString:string) : number {
    const tindex = dateString.indexOf('T');

    dateString = dateString.slice(0, tindex) +' '+ dateString.slice(tindex+1, dateString.length);

    let date = new Date(dateString).getTime();

    let now = new Date().getTime();

    return date - now;
  }

  convertMsToTime(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    this.seconds = seconds % 60;
    this.minutes = minutes % 60;
    this.hours = hours;

    // 👇️ If you want to roll hours over, e.g. 00 to 24
    // 👇️ uncomment the line below
    // uncommenting next line gets you `00:00:00` instead of `24:00:00`
    // or `12:15:31` instead of `36:15:31`, etc.
    // 👇️ (roll hours over)
    // hours = hours % 24;
  }


}
