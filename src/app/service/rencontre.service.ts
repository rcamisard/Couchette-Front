import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Personne} from "../models/personne";
import {Observable} from "rxjs";
import {Rencontre} from "../models/rencontre";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RencontreService {

  private baseUrl = environment.baseUrl + "rencontre/";

  constructor(private http: HttpClient) {}

  ajoutRencontre(rencontre: Rencontre): Observable<Rencontre> {
    // @ts-ignore
    rencontre.idUtilisateur = sessionStorage.getItem("id")? sessionStorage.getItem("id"): '';
    return this.http.post<Rencontre>(this.baseUrl + "ajout", rencontre)
  }

  getRencontres(){
    // @ts-ignore
    let params = new HttpParams().set("id", sessionStorage.getItem("id")? sessionStorage.getItem("id") : '')
    // @ts-ignore
    return this.http.get<Rencontre[]>(this.baseUrl, {params})
  }

  supprimerRencontre(id : string){
    let params : HttpParams = new HttpParams().set('id', id)
    return this.http.delete(this.baseUrl + id, {params});
  }

  getRencontre(id : string){
    let params : HttpParams = new HttpParams().set('id', id)
    return this.http.get<Rencontre>(this.baseUrl + id, {params});
  }
}


