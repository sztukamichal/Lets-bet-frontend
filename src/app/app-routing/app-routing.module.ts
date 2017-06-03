import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoggingComponent} from "../logging/logging.component";
import {LeagueReviewComponent} from "../league-review/league-review.component";

const routes: Routes = [
  { path: '', redirectTo: '/league-review', pathMatch: 'full'},
  { path: 'logging', component: LoggingComponent},
  { path: 'league-review', component: LeagueReviewComponent}

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
