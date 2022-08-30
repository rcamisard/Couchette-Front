import { Component, OnInit } from '@angular/core';
import {Personne} from "../../models/personne";
import {PersonneServiceService} from "../../service/personne-service.service";
import {EnumerationService} from "../../service/enumeration.service";
import {SigneAstrologique} from "../../models/signeAstrologique";
import {RencontreService} from "../../service/rencontre.service";
import {Rencontre} from "../../models/rencontre";
import {DatePipe} from "@angular/common";
import {Genre} from "../../models/genre";

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  dataSignesAstros: any[] = [];
  dataElements: any[] = [];
  dataNotesAstro: any[] = [];
  dataNotesTemps: any[] = [];
  dataGenres: any[] = [];
  noteMoyenneRencontres : number = 0;
  ageMoyenPersonnesRencontrees : number = 0;

  // options
  view: any[2] = [400, 300];
  gradient: boolean = false;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  percentageFormatting: boolean = true
  legendPosition: string = 'below';
  colorScheme = 'cool'
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabelNoteSignesAstro = 'Signe astrologique';
  yAxisLabelNoteSignesAstro = 'Moyenne des notes';
  xAxisLabelNoteTemps = 'Date';
  yAxisLabelNoteTemps = 'Note';


  rencontres : Rencontre[] = []
  personnes : Personne[] = []
  signesAstro : SigneAstrologique[] = []
  genres : Genre[] = []

  nbSignesAstro : Map<String, number> = new Map<String, number>();
  noteSignesAstro : Map<String, number> = new Map<String, number>();
  countSigneAstro : Map<String, number> = new Map<String, number>();

  constructor(private personneService : PersonneServiceService, private enumerationService : EnumerationService, private rencontreService : RencontreService, private datePipe : DatePipe) { }

  ngOnInit(): void {
    this.personneService.getPersonnes().subscribe(res => {
      this.personnes = res
      this.enumerationService.loadSignesAstro().subscribe(res => {
        this.signesAstro = res
        this.rencontreService.getRencontres().subscribe( res => {
          this.rencontres = res;
          this.loadDataSignesAstro()
          this.loadDataElements()
          this.loadDataNotesMoyenneSigneAstro();
          this.loadNotesTemps()
          this.loadDataGenres()
          this.loadNoteMoyenneRencontres();
          this.loadAgeMoyenPersonnesRencontrees()
        })
      })
    })
  }

  initMapsSignesAstro(){
    this.signesAstro.forEach( s => {
      this.nbSignesAstro.set(s.libelle, 0)
      this.noteSignesAstro.set(s.libelle,0)
      this.countSigneAstro.set(s.libelle,0)
    })
  }


  loadDataSignesAstro(){
    let tmpSignesAstros : any[] = [];
    this.initMapsSignesAstro()

    this.personnes.forEach(p => {
      // @ts-ignore
      let signeAstro = this.signesAstro.find(s => s.id == p.idSigneAstrologique)? this.signesAstro.find(s => s.id == p.idSigneAstrologique).libelle : 'Inconnu'
      // @ts-ignore
      this.nbSignesAstro.set(signeAstro, this.nbSignesAstro.get(signeAstro) + 1)
    })
    this.nbSignesAstro.forEach((value, key) => {
      if(value != 0){
        tmpSignesAstros.push({name : key,value : value})
      }
    })
    this.dataSignesAstros = tmpSignesAstros
  }

  loadDataElements(){
    let tmpElements : any[] = [];
    // @ts-ignore
    tmpElements.push({name: "Terre", value: this.nbSignesAstro.get("Capricorne") + this.nbSignesAstro.get("Vierge") + this.nbSignesAstro.get("Taureau")});
    // @ts-ignore
    tmpElements.push({name: "Feu", value: this.nbSignesAstro.get("Lion") + this.nbSignesAstro.get("Sagittaire") + this.nbSignesAstro.get("Bélier")});
    // @ts-ignore
    tmpElements.push({name: "Eau", value: this.nbSignesAstro.get("Poisson") + this.nbSignesAstro.get("Cancer") + this.nbSignesAstro.get("Scorpion")});
    // @ts-ignore
    tmpElements.push({name: "Air", value: this.nbSignesAstro.get("Balance") + this.nbSignesAstro.get("Gémeaux") + this.nbSignesAstro.get("Verseau")});
    this.dataElements = tmpElements
  }

  loadDataNotesMoyenneSigneAstro(){
    let tmpNotesAstro: any[] = []
      this.rencontres.forEach( rencontre => {
        this.personneService.getPersonnesByIdRencontre(rencontre.id? rencontre.id : '').subscribe(personnes => {
          personnes.forEach( p => {
            // @ts-ignore
            let signeAstro = this.signesAstro.find(s => s.id == p.idSigneAstrologique)? this.signesAstro.find(s => s.id == p.idSigneAstrologique).libelle : 'Inconnu'
            if(signeAstro != 'Inconnu') {
              // @ts-ignore
              this.countSigneAstro.set(signeAstro, this.countSigneAstro.get(signeAstro) + 1);
              // @ts-ignore
              this.noteSignesAstro.set(signeAstro, this.noteSignesAstro.get(signeAstro) + rencontre.note)
              tmpNotesAstro = []
              this.noteSignesAstro.forEach((value, key) => {
                if (value != 0) {
                  // @ts-ignore
                  tmpNotesAstro.push({name: key, value: value / this.countSigneAstro.get(key)});
                } else {
                  tmpNotesAstro.push({name: key, value: 0});
                }
              })
              this.dataNotesAstro = tmpNotesAstro
            }
          })
        })
      })
  }

  loadNotesTemps(){
    let tmpNotesTemps: any[] = [];
    let tmpSeries: any[] = [];

    this.rencontres.forEach( rencontre => {
      tmpSeries.push({name : this.datePipe.transform(rencontre.date), value : rencontre.note})
    })
    tmpNotesTemps.push({name : "Notes", series : tmpSeries})
    this.dataNotesTemps = tmpNotesTemps;
  }

  loadDataGenres(){
    let tmpDataGenres: any[] = []
    this.enumerationService.loadGenres().subscribe(res => {
      this.genres = res;

      // @ts-ignore
      let idHomme = this.genres.find(g => g.libelle == 'Homme').id
      // @ts-ignore
      let idFemme = this.genres.find(g => g.libelle == 'Femme').id
      // @ts-ignore
      let idAutre = this.genres.find(g => g.libelle == 'Autre').id

      tmpDataGenres.push({name : 'Homme', value : this.personnes.filter(p => p.idGenre == idHomme).length})
      tmpDataGenres.push({name : 'Femme', value : this.personnes.filter(p => p.idGenre == idFemme).length})
      tmpDataGenres.push({name : 'Autre', value : this.personnes.filter(p => p.idGenre == idAutre).length})
      this.dataGenres = tmpDataGenres;
    })
  }

  loadNoteMoyenneRencontres(){
    this.rencontres.forEach(rencontre => {
      // @ts-ignore
      this.noteMoyenneRencontres += Number(rencontre.note)
    })
    this.noteMoyenneRencontres /= Number(this.rencontres.length)
  }

  loadAgeMoyenPersonnesRencontrees(){
    let lenPersonnes = this.personnes.length
    this.personnes.forEach( personne => {
      if (personne.age){
        this.ageMoyenPersonnesRencontrees += Number(personne.age)
      } else {
        lenPersonnes --
      }
    })
    this.ageMoyenPersonnesRencontrees /= Number(lenPersonnes)
  }
}
