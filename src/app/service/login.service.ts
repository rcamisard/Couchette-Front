import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "../models/utilisateur";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticated = false;
  private baseUrl = environment.baseUrl + "utilisateur/";
  constructor(private http: HttpClient) {
  }

  login(username : String, password : String) {
    let params = new HttpParams().set("username", username.toString()).set("password", password.toString())
    return this.http.get<Utilisateur>(this.baseUrl + "login", {params});
  }

  creerCompte(username: string, password: string) {
    return this.http.post<Utilisateur>(this.baseUrl + "creerCompte", {'username': username, 'password': password})
  }
}
