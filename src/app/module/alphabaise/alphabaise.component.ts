import { Component, OnInit } from '@angular/core';
import {PersonneServiceService} from "../../service/personne-service.service";
import {Personne} from "../../models/personne";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-alphabaise',
  templateUrl: './alphabaise.component.html',
  styleUrls: ['./alphabaise.component.css']
})
export class AlphabaiseComponent implements OnInit {

  alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  lettresPoints : Map<string, number> = new Map<string, number>()
  lettresObtained : Map<string, boolean> = new Map<string, boolean>();

  nombreLettres : number = 0;
  points : number = 0;

  color : string = ''
  personnes : Personne[] = []

  constructor(private personneService : PersonneServiceService) { }

  ngOnInit(): void {
    this.initMapLettres();

    this.personneService.getPersonnes().subscribe( res => {
      this.personnes = res;
      this.personnes.forEach(p => {
        let initiale = p.prenom?.charAt(0).toUpperCase().toString()
        // @ts-ignore
        if(!this.lettresObtained.get(initiale)) {


          // @ts-ignore
          this.lettresObtained.set(initiale, true)
          this.nombreLettres++
          // @ts-ignore
          this.points += this.lettresPoints.get(initiale)
        }
      })
    })
  }

  initMapLettres(){
    this.alphabet.forEach(lettre => {
      this.lettresObtained.set(lettre,false);
      if(lettre == 'A' || lettre == 'E' || lettre == 'I' || lettre == 'L' || lettre == 'N' || lettre == 'O' || lettre == 'R' || lettre == 'S' || lettre == 'U'){
        this.lettresPoints.set(lettre, 1)
      } else if (lettre == 'D' || lettre == 'G' || lettre == 'M'){
        this.lettresPoints.set(lettre, 2)
      } else if (lettre == 'B' || lettre == 'C' || lettre == 'P') {
        this.lettresPoints.set(lettre, 3)
      } else if (lettre == 'F' || lettre == 'H' || lettre == 'V') {
        this.lettresPoints.set(lettre, 4)
      } else if (lettre == 'J' || lettre == 'Q') {
        this.lettresPoints.set(lettre, 8)
      } else {
        this.lettresPoints.set(lettre, 10)
      }
    })
  }
}
