import { Component } from '@angular/core';
import {TdMediaService} from "@covalent/core";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarOpened: boolean ;
  constructor(
    public media: TdMediaService,
    public mdIconRegistry: MdIconRegistry,
    public sanitizer: DomSanitizer
  ) {
    mdIconRegistry.addSvgIcon("league-review", sanitizer.bypassSecurityTrustResourceUrl("/assets/trophyc.svg"));
    mdIconRegistry.addSvgIcon("tournament-review", sanitizer.bypassSecurityTrustResourceUrl("/assets/podium.svg"));
    mdIconRegistry.addSvgIcon("tournament-create", sanitizer.bypassSecurityTrustResourceUrl("/assets/teamwork.svg"));
    mdIconRegistry.addSvgIcon("tournament-create2", sanitizer.bypassSecurityTrustResourceUrl("/assets/calendar.svg"));
    mdIconRegistry.addSvgIcon("us", sanitizer.bypassSecurityTrustResourceUrl("/assets/student.svg"));
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
  }

}
