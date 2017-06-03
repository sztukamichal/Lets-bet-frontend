import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-review',
  templateUrl: './league-review.component.html',
  styleUrls: ['./league-review.component.css']
})
export class LeagueReviewComponent implements OnInit {

  selectedLeague: string;

  leagues = [
    {value: 'BD', viewValue: 'Bundesliga'},
    {value: 'PD', viewValue: 'Primera Division'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
