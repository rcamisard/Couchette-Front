import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../models/utilisateur";
import {SigneAstrologique} from "../models/signeAstrologique";
import {Lieu} from "../models/lieu";
import {Rencontre} from "../models/rencontre";
import {TypeRencontre} from "../models/typeRencontre";
import {Pratique} from "../models/pratique";
import {Genre} from "../models/genre";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EnumerationService {

  private baseUrl = environment.baseUrl + "enumeration/";

  constructor(private http: HttpClient) { }

  loadSignesAstro(){
    return this.http.get<SigneAstrologique[]>(this.baseUrl + "signesAstrologiques");
  }

  loadLieux(){
    return this.http.get<Lieu[]>(this.baseUrl + "lieux");
  }

  loadTypesRencontre(){
    return this.http.get<TypeRencontre[]>(this.baseUrl + "typesRencontre")
  }

  loadPratiques(){
    return this.http.get<Pratique[]>(this.baseUrl + "pratiques")
  }

  loadGenres(){
    return this.http.get<Genre[]>(this.baseUrl + "genres")
  }
}
