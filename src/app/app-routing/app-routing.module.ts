import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoggingComponent} from "../logging/logging.component";
import {LeagueReviewComponent} from "../league-review/league-review.component";
import {CreateTournamentComponent} from "../create-tournament/create-tournament.component";

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: LoggingComponent},
  { path: 'league-review', component: LeagueReviewComponent},
  { path: 'create-tournament', component: CreateTournamentComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
