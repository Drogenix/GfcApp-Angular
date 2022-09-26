import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppNewsComponent } from './app-news/app-news.component';
import {AppRatingsComponent} from './app-ratings/ratings.component';
import { AppMainComponent } from './app-main/app-main.component';
import {AppRoutingModule} from "./routing/app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppTournamentsComponent } from './app-tournaments/tournaments.component';
import {AppFullCardComponent} from './app-full-card/full-card.component';
import { AppFightersComponent } from './app-fighters/fighters.component';
import {AppNewsPageComponent} from './app-news/app-news-page/news-page.component';
import {AppFighterProfileComponent} from './app-fighter-profile/fighter-profile.component';
import {ApiService} from "./services/api.service";
import {HttpClientModule} from "@angular/common/http";
import {ErrorPageComponent } from './app-error/error-page.component';
import { AppSpinnerComponent } from './app-spinner/app-spinner.component';
import { AppFooterComponent } from './app-footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNewsComponent,
    AppRatingsComponent,
    AppMainComponent,
    AppTournamentsComponent,
    AppFullCardComponent,
    AppFightersComponent,
    AppNewsPageComponent,
    AppFighterProfileComponent,
    ErrorPageComponent,
    AppSpinnerComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
