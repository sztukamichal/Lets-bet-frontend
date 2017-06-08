import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Match} from '../model/Match';
import {ITdDataTableColumn, TdMediaService} from "@covalent/core";

@Component({
  selector: 'app-league-review',
  templateUrl: './league-review.component.html',
  styleUrls: ['./league-review.component.css']
})
export class LeagueReviewComponent implements OnInit, AfterViewInit {

  selectedLeague: string;
  league: any = {
    name: 'Bundesliga',
    URI: 'http://logok.org/wp-content/uploads/2014/12/Bundesliga-logo-2010.png'
  };
  matches: Match[] = [{
      id: 1,
      homeTeam: 'Bayern Monachium',
      homeTeamURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Logo_FC_Bayern_M%C3%BCnchen.svg/220px-Logo_FC_Bayern_M%C3%BCnchen.svg.png',
      awayTeam: 'Borussia Dortmund',
      awayTeamURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/768px-Borussia_Dortmund_logo.svg.png',
      result: '1 : 0'
    },
    {
      id: 2,
      homeTeam: 'FC Augsburg',
      homeTeamURI: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/FC_Augsburg_logo.svg/230px-FC_Augsburg_logo.svg.png',
      awayTeam: 'Bayer Leverkusen',
      awayTeamURI: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/1280px-Bayer_04_Leverkusen_logo.svg.png',
      result: '1 : 1'
    },
    {
      id: 3,
      homeTeam: 'Darmstadt 98',
      homeTeamURI: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Darmstadt_98_football_club_new_logo_2015.png',
      awayTeam: 'Hamburger SV',
      awayTeamURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/HSV-Logo.svg/848px-HSV-Logo.svg.png',
      result: '3 : 0'
    },
    {
      id: 4,
      homeTeam: 'Schalke 04',
      homeTeamURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/400px-FC_Schalke_04_Logo.svg.png',
      awayTeam: 'Werder Bremen',
      awayTeamURI: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SV-Werder-Bremen-Logo.svg/125px-SV-Werder-Bremen-Logo.svg.png',
      result: '1 : 2'
    }
  ];

  leagues = [
    {value: 'BD', viewValue: 'Bundesliga'},
    {value: 'PD', viewValue: 'Primera Division'}
  ];
  data: any[] = [
    { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
    { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
  ];
  columns: ITdDataTableColumn[] = [
    { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
    { name: 'item', label: 'Item name' },
    { name: 'price', label: 'Price (US$)', numeric: true, format: v => v.toFixed(2) },
  ];

  constructor(
    public media: TdMediaService
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
  }

}
