import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {MatDrawerMode, MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  //@ts-ignore
  @ViewChild('sidenav', {static: false})
  // @ts-ignore
  sideNav: MatSidenav

  sidenavMode: MatDrawerMode = "side";
  sidenavClose: boolean = false;

  toggleMenu(){
    this.sidenavClose = !this.sidenavClose;

    this.sidenavClose?this.sideNav.close(): this.sideNav.open()
  }

  getUsername(){
    return sessionStorage.getItem('username') == null;
  }
}
