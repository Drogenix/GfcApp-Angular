import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppMainComponent} from "../app-main/app-main.component";
import {AppRatingsComponent} from "../app-ratings/ratings.component";
import {AppTournamentsComponent} from "../app-tournaments/tournaments.component";
import {AppFullCardComponent} from "../app-full-card/full-card.component";
import {AppFightersComponent} from "../app-fighters/fighters.component";
import {AppNewsComponent} from "../app-news/app-news.component";
import {AppNewsPageComponent} from "../app-news/app-news-page/news-page.component";
import {AppFighterProfileComponent} from "../app-fighter-profile/fighter-profile.component";
import {FightersResolveService} from "../services/fighters-resolve.service";
import {ErrorPageComponent} from "../app-error/error-page.component";
import {MainResolveService} from "../services/main-resolve.service";
import {RatingsResolveService} from "../services/ratings-resolve.service";
import {TournamentsResolveService} from "../services/tournaments-resolve.service";
import {FullCardResolveService} from "../services/full-card-resolve.service";
import {FighterProfileResolveService} from "../services/fighter-profile-resolve.service";
import {NewsResolveService} from "../services/news-resolve.service";
import {NewsPageResolveService} from "../services/news-page-resolve.service";
import {FightsResolveService} from "../services/fights-resolver.service";
import {EndedTournamentsResolveService} from "../services/ended-tournaments-resolve.service";

const routes: Routes = [
  {
    path: '', component:AppMainComponent, data:{animation: 'MainPage'}, resolve:{data:MainResolveService}
  },
  {
    path: 'ratings', component:AppRatingsComponent, data:{animation: 'RatesPage'}, resolve:{data:RatingsResolveService}
  },
  {
    path: 'tournaments', component:AppTournamentsComponent, data:{animation: 'TournamsPage'}, resolve:{future:TournamentsResolveService, ended: EndedTournamentsResolveService}
  },
  {
    path: 'tournaments/:id', component:AppFullCardComponent, data:{animation: 'CardPage'}, resolve:{data:FullCardResolveService}
  },
  {
    path: 'fighters', component:AppFightersComponent, data:{animation: 'FightersPage'}, resolve:{data:FightersResolveService}
  },
  {
    path: 'fighters/:id', component:AppFighterProfileComponent, data:{animation: 'FighterProfilePage'}, resolve:{data:FighterProfileResolveService, history:FightsResolveService}
  },
  {
    path: 'news', component:AppNewsComponent, data:{animation: 'NewsPage'}, resolve:{data:NewsResolveService}
  },
  {
    path: 'news/:id', component:AppNewsPageComponent, data:{animation: 'NewsInfoPage'}, resolve:{data:NewsPageResolveService}
  },
  {
    path: '**', component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
