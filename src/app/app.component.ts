import { Component } from '@angular/core';
import {TdMediaService} from "@covalent/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public media: TdMediaService
  ) {}

  ngAfterViewInit(): void {
    this.media.broadcast();
  }

}
