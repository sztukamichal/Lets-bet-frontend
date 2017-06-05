import { Component, OnInit } from '@angular/core';
import {Match} from '../model/Match';

@Component({
  selector: 'app-league-review',
  templateUrl: './league-review.component.html',
  styleUrls: ['./league-review.component.css']
})
export class LeagueReviewComponent implements OnInit {

  selectedLeague: string;
  league: object = {
    name: 'Bundesliga',
    URI: 'http://logok.org/wp-content/uploads/2014/12/Bundesliga-logo-2010.png'
  };
  match: Match = {
    id: 1,
    homeTeam: 'Bayern Monachium',
    homeTeamURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_FC_Bayern_M%C3%BCnchen.svg/220px-Logo_FC_Bayern_M%C3%BCnchen.svg.png',
    awayTeam: 'Borussia Dortmund',
    awayTeamURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/768px-Borussia_Dortmund_logo.svg.png',
    result: '1 : 0'
  };

  leagues = [
    {value: 'BD', viewValue: 'Bundesliga'},
    {value: 'PD', viewValue: 'Primera Division'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
