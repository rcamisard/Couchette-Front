import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit {

  username = ''
  password = ''
  confirmPassword = ''
  hide = true;
  errorPassword: boolean = false;
  // @ts-ignore
  form: FormGroup;

  constructor(private router: Router,
              private loginservice: LoginService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  get f() { // @ts-ignore
    return this.form.controls;
  }

  creerCompte() {

    this.errorPassword = false;

    if (this.form.invalid) {
      return;
    }

    if (this.password != this.confirmPassword) {
      return;
    }

    this.loginservice.creerCompte(this.username, this.password).subscribe(res => {
      if (res) {
        sessionStorage.setItem('username', res.username)
        sessionStorage.setItem('id', res.id)
        this.router.navigate([''])
      }
    })
  }
}
