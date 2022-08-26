import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {Rencontre} from "../../models/rencontre";
import {Personne} from "../../models/personne";
import {PersonneServiceService} from "../../service/personne-service.service";
import {DateAdapter, MAT_DATE_LOCALE} from "@angular/material/core";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {Lieu} from "../../models/lieu";
import {EnumerationService} from "../../service/enumeration.service";
import {TypeRencontre} from "../../models/typeRencontre";
import {Pratique} from "../../models/pratique";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatChipInputEvent, MatChipList} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {map, Observable, startWith} from "rxjs";
import {FormControl} from "@angular/forms";
import {RencontreService} from "../../service/rencontre.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  AjouterRencontreSnackbarComponent
} from "../../core/components/snackBar/ajouter-rencontre-snackbar/ajouter-rencontre-snackbar.component";

@Component({
  selector: 'app-ajouter-rencontre',
  templateUrl: './ajouter-rencontre.component.html',
  styleUrls: ['./ajouter-rencontre.component.css']
})
export class AjouterRencontreComponent implements OnInit {

  separatorKeyCodes: number[] = [ENTER, COMMA]
  rencontre: Rencontre = new Rencontre();

  //SELECT
  personnes: Personne[] = []
  lieux: Lieu[] = []
  typesRencontre : TypeRencontre[] = []

  //CHIPS
  pratiques: Pratique[] = []
  pratiquesSelectionnees : Pratique[] = []
  pratiquesControl = new FormControl("")


  constructor(private personneService : PersonneServiceService,
              private enumerationService : EnumerationService,
              private rencontreService : RencontreService,
              private _adapter: DateAdapter<any>,
              @Inject(MAT_DATE_LOCALE) private _locale: string,
              private ajoutSnackBar : MatSnackBar) {
    this._locale = 'fr'
    this._adapter.setLocale(this._locale)

  }

  ngOnInit(): void {
    this.personneService.getPersonnes().subscribe( res => {
      this.personnes = res
    })
    this.enumerationService.loadLieux().subscribe(res => {this.lieux = res})
    this.enumerationService.loadTypesRencontre().subscribe( res => { this.typesRencontre = res})
    this.enumerationService.loadPratiques().subscribe( res => {this.pratiques = res})
    this.rencontre.idPersonnes.push('');
  }

  ajouterRencontre(): void{
    this.rencontreService.ajoutRencontre(this.rencontre).subscribe( res => {this.ajoutSnackBar.openFromComponent(AjouterRencontreSnackbarComponent, {duration: 3000})});
  }

  ajouterNombrePersonne() : void{
    this.rencontre.idPersonnes.push('')
  }

  retirerNombrePersonne() : void {
    this.rencontre.idPersonnes.pop()
  }
  dateChange(event : MatDatepickerInputEvent<Date>){
    this.rencontre.date = event.value
  }

  removePratique( pratique : Pratique) : void {
    const index = this.pratiquesSelectionnees.indexOf(pratique)
    if(index >= 0){
      this.pratiquesSelectionnees.slice(index,1)
    }
  }

  addPratique(event : MatChipInputEvent) : void {
      let pratique : Pratique | undefined = this.pratiques.find(p => p.libelle == event.value)
    if (pratique) {
      this.pratiquesSelectionnees.push(pratique)
    } else {
      pratique = new Pratique()
      pratique.libelle = event.value
      this.pratiquesSelectionnees.push(pratique)
    }
  }

  selected(event : MatAutocompleteSelectedEvent){
    const pratique : Pratique | undefined = this.pratiques.find(p => p.libelle == event.option.viewValue)
    if(pratique){
    this.pratiquesSelectionnees.push(pratique)
     // this.nouvellePratiqueInput.nativeElement.value = '';
    }
  }
}
