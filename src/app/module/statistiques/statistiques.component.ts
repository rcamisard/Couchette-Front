import { Component, OnInit } from '@angular/core';
import {Personne} from "../../models/personne";
import {PersonneServiceService} from "../../service/personne-service.service";
import {EnumerationService} from "../../service/enumeration.service";
import {SigneAstrologique} from "../../models/signeAstrologique";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  data: any[] = [];
  view: any[2] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  colorScheme = "vivid"

  personnes : Personne[] = []
  signesAstro : SigneAstrologique[] = []
  nbSignesAstro : Map<String, number> = new Map<String, number>();

  constructor(private personneService : PersonneServiceService, private enumerationService : EnumerationService) { }

  ngOnInit(): void {
    this.personneService.getPersonnes().subscribe(res => {
      this.personnes = res
      this.enumerationService.loadSignesAstro().subscribe(res => {
        this.signesAstro = res
        this.initNbSignesAstro()
        this.personnes.forEach(p => {
          // @ts-ignore
          let signeAstro = this.signesAstro.find(s => s.id == p.idSigneAstrologique).libelle
          // @ts-ignore
          this.nbSignesAstro.set(signeAstro, this.nbSignesAstro.get(signeAstro) + 1)
        })
      })
      this.data.push(this.nbSignesAstro);
    })
  }

  initNbSignesAstro(){
    this.signesAstro.forEach( s => {
      this.nbSignesAstro.set(s.libelle, 0)
    })
  }

}
