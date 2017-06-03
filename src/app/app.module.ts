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
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LeagueReviewComponent } from './league-review/league-review.component'

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    HeaderComponent,
    SideNavComponent,
    LeagueReviewComponent
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
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
