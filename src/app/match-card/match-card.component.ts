import {Component, Input, OnInit} from '@angular/core';
import {Match} from '../model/Match';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {

  @Input() match: Match;

  constructor() { }

  ngOnInit() {
  }

}
