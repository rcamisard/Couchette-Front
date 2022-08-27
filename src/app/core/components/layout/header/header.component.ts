import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('toggleMenu')
  toggleMenu: EventEmitter<void> = new EventEmitter()

  @Input() username : string =  ''

  constructor(private router: Router) {}

  ngOnInit(): void {
    // @ts-ignore
    this.username = sessionStorage.getItem("username")
  }

  swap(){
    this.toggleMenu.emit();
  }

  logout() {
    this.swap()
    sessionStorage.clear();
    document.body.style.height = '100vh'
    this.router.navigate(['login']);
  }

  setUsername(username : string){
    // @ts-ignore
    this.username = sessionStorage.getItem("username");
  }
}
