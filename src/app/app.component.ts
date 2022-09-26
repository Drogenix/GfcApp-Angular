import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {animate, group, keyframes, query, style, transition, trigger} from "@angular/animations";
import {
  ChildrenOutletContexts,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from "@angular/router";
import {ApiService} from "../../../Gfc/src/app/services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('routeAnims', [
      transition('*<=>*', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            height:'100%'
          })
        ], {optional: true}),
        query(':enter', [
          style({opacity:0, height:'100%'})
        ], {optional: true}),
        group([
          query(':leave', [
            animate('750ms', style({opacity:0}))
          ], {optional: true}),
          query(':enter', [
            animate('1500ms', keyframes([
              style({opacity:0, offset:0.5}),
              style({opacity:1, offset:1})
            ]))
          ], {optional: true})
        ]),
      ]),


    ]),
    trigger('spinnerDelay',[
      transition(':enter', [
        style({opacity:0}),
        animate('2s', keyframes([
          style({opacity:0, offset:0.99}),
          style({opacity:1, offset:1})
        ]))
      ]),
      transition(':leave',[
        style({opacity:'*'}),
        animate('15ms', style({opacity:0}))
      ])
    ])
  ]

})
export class AppComponent{
  title = 'gfc';

  isDataLoading:boolean;

  isErrorOccured:boolean;

  constructor(private contexts: ChildrenOutletContexts,
              private renderer:Renderer2,
              private parent:ElementRef,
              private apiService:ApiService,private router: Router)
  {
      this.router.events.subscribe(event =>
      {
          if (event instanceof NavigationStart)
          {
            this.isDataLoading = true;

            this.isErrorOccured = false;
          }
          if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
            this.isDataLoading = false;

            if(event instanceof NavigationError)
            {
              this.isErrorOccured = true;
            }
          }
    });
  }

  getRouteAnimationData()
  {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
