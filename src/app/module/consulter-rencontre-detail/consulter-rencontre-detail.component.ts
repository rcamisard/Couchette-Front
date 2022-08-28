import { Component, OnInit } from '@angular/core';
import {RencontreService} from "../../service/rencontre.service";
import {Personne} from "../../models/personne";
import {Rencontre} from "../../models/rencontre";
import {ActivatedRoute} from "@angular/router";
import {Lieu} from "../../models/lieu";
import {TypeRencontre} from "../../models/typeRencontre";
import {EnumerationService} from "../../service/enumeration.service";
import {PersonneServiceService} from "../../service/personne-service.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-consulter-rencontre-detail',
  templateUrl: './consulter-rencontre-detail.component.html',
  styleUrls: ['./consulter-rencontre-detail.component.css']
})
export class ConsulterRencontreDetailComponent implements OnInit {

  personnes: Personne[] = [];
  rencontre: Rencontre = new Rencontre();
  lieu: Lieu = new Lieu;
  typeRencontre: TypeRencontre = new TypeRencontre();

  id: string | null = '';

  constructor(private rencontreService : RencontreService, private route: ActivatedRoute, private enumerationservice : EnumerationService, private personneService : PersonneServiceService, public datePipe : DatePipe) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.id = res.get('id')
    })
    this.rencontreService.getRencontre(this.id ? this.id : '').subscribe( res => {
      this.rencontre = res
      this.enumerationservice.loadLieux().subscribe(lieux => {
        // @ts-ignore
        this.lieu = lieux.find(l => l.id == this.rencontre.idLieu)? lieux.find(l => l.id == this.rencontre.idLieu) : new Lieu();
        this.enumerationservice.loadTypesRencontre().subscribe(type => {
          // @ts-ignore
          this.typeRencontre = type.find(t => t.id == this.rencontre.idTypeRencontre)? type.find(t => t.id == this.rencontre.idTypeRencontre): new TypeRencontre()
            this.personneService.getPersonnesByIdRencontre(this.id? this.id : '').subscribe(res => {
              this.personnes = res;
            })
        })
      })
    })
  }

}
