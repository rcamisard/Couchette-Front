import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  hide = true;

  constructor(private router: Router,
              private loginservice: LoginService) { }

  ngOnInit() {

  }

  login() {
    this.loginservice.login(this.username, this.password).subscribe(res => {
      if (res) {
      sessionStorage.setItem('username', res.username)
      sessionStorage.setItem('id', res.id)
      this.invalidLogin = false
        this.router.navigate([''])
      } else {
        this.invalidLogin = true
      }
    })
  }
}
