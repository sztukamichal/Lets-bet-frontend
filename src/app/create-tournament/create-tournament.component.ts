import { Component, OnInit } from '@angular/core';
import {StepState, TdMediaService} from "@covalent/core";

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent implements OnInit {
  stateStep2: StepState = StepState.None;
  constructor(
    public media: TdMediaService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.media.broadcast();
  }

}
