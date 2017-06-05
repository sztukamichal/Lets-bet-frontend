import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoggingComponent } from './logging/logging.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule, MdCardModule, MdDatepickerModule, MdGridListModule, MdIconModule, MdInputModule, MdNativeDateModule,
  MdSelectModule, MdTabsModule,
  MdToolbar,
  MdToolbarModule
} from "@angular/material";
import 'hammerjs';
import { LeagueReviewComponent } from './league-review/league-review.component'
import {CovalentLayoutModule, TdMediaService} from "@covalent/core";
import { MatchCardComponent } from './match-card/match-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    LeagueReviewComponent,
    MatchCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdGridListModule,
    MdIconModule,
    MdSelectModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    CovalentLayoutModule
  ],
  providers: [TdMediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
