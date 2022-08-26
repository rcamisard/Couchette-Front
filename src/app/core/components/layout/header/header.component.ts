import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('toggleMenu')
  toggleMenu: EventEmitter<void> = new EventEmitter()
  // @ts-ignore
  username : string = ''
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(sessionStorage)
    // @ts-ignore
    this.username = sessionStorage.getItem("username")
  }

  swap(){
    this.toggleMenu.emit();
  }

  logout() {
    this.swap()
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
