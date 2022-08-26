import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Personne} from "../models/personne";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {
  private baseUrl = environment.baseUrl + "personne/";

  constructor(private http: HttpClient) {}

   getPersonnes(): Observable<Personne[]> {
     // @ts-ignore
     let params = new HttpParams().set("id", sessionStorage.getItem("id")? sessionStorage.getItem("id") : '')
     // @ts-ignore
     return this.http.get<Personne[]>(this.baseUrl, {params})
  }

  ajoutPersonne(personne: Personne): Observable<Personne> {
    // @ts-ignore
    personne.idUtilisateur = sessionStorage.getItem("id")? sessionStorage.getItem("id"): '';
    return this.http.post<Personne>(this.baseUrl + "ajout", personne)
  }

  getPersonne(id: string) {
    let params : HttpParams = new HttpParams().set('id', id)
    return this.http.get<Personne>(this.baseUrl + id, {params});
  }

  deletePersonne(id: string) {
    let params : HttpParams = new HttpParams().set('id', id)
    return this.http.delete(this.baseUrl + id, {params});
  }

  getPersonnesByIdRencontre(id : string){
    let params : HttpParams = new HttpParams().set('id', id)
    return this.http.get<Personne[]>(this.baseUrl + "rencontre", {params});
  }
}
