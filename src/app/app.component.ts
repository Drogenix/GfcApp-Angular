import { Component } from '@angular/core';
import {animate, animateChild, group, keyframes, query, style, transition, trigger} from "@angular/animations";
import {ChildrenOutletContexts} from "@angular/router";

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
            width: '100%'
          })
        ], {optional: true}),
        query(':enter', [
          style({opacity:0, left:'100%', height: '90vh'})
        ], {optional: true}),
        group([
          query(':leave', [
            animate('750ms', style({opacity:0, left:'-100%'}))
          ], {optional: true}),
          query(':enter', [
            animate('1500ms', keyframes([
              style({left: 0, opacity:0.2, offset:0.5}),
              style({opacity:1, offset:1})
            ]))
          ], {optional: true})
        ]),
      ]),


    ]),
    trigger('mainAnims', [
      transition('*<=>*', [
        style({opacity: '*'}),
        query(":enter", animate('500ms ease-in', style({opacity:1}))),
        query(":leave", animate('500ms ease-in', style({opacity:0}))),
      ])
    ])
  ]

})
export class AppComponent {
  title = 'gfc';

  constructor(private contexts: ChildrenOutletContexts) {
  }

  getRouteAnimationData()
  {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
