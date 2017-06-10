import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoggingComponent } from './logging/logging.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule, MdCardModule, MdDatepickerModule, MdGridListModule, MdIconModule, MdIconRegistry, MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdSelectModule, MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import 'hammerjs';
import { LeagueReviewComponent } from './league-review/league-review.component'
import {CovalentDataTableModule, CovalentLayoutModule, CovalentStepsModule, TdMediaService} from "@covalent/core";
import { MatchCardComponent } from './match-card/match-card.component';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import {CovalentHttpModule} from "@covalent/http";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentDynamicFormsModule} from "@covalent/dynamic-forms";

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    LeagueReviewComponent,
    MatchCardComponent,
    CreateTournamentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdGridListModule,
    MdIconModule,
    MdSelectModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTabsModule,
    CovalentLayoutModule,
    CovalentDataTableModule,
    MdListModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
  ],
  providers: [TdMediaService, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
