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

const routes: Routes = [
  {
    path: '', component:AppMainComponent, data:{animation: 'MainPage'}
  },
  {
    path: 'ratings', component:AppRatingsComponent, data:{animation: 'RatesPage'}
  },
  {
    path: 'tournaments', component:AppTournamentsComponent, data:{animation: 'TournamsPage'}
  },
  {
    path: 'tournaments/:id', component:AppFullCardComponent, data:{animation: 'CardPage'}
  },
  {
    path: 'fighters', component:AppFightersComponent, data:{animation: 'FightersPage'}
  },
  {
    path: 'fighters/:id', component:AppFighterProfileComponent, data:{animation: 'FighterProfilePage'}
  },
  {
    path: 'news', component:AppNewsComponent, data:{animation: 'NewsPage'}
  },
  {
    path: 'news/:id', component:AppNewsPageComponent, data:{animation: 'NewsInfoPage'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
