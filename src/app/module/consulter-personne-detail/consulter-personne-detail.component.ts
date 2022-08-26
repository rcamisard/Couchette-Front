import {Component, OnInit} from '@angular/core';
import {Personne} from "../../models/personne";
import {PersonneServiceService} from "../../service/personne-service.service";
import {ActivatedRoute} from "@angular/router";
import {EnumerationService} from "../../service/enumeration.service";
import {SigneAstrologique} from "../../models/signeAstrologique";
import {Genre} from "../../models/genre";

@Component({
  selector: 'app-consulter-personne-detail',
  templateUrl: './consulter-personne-detail.component.html',
  styleUrls: ['./consulter-personne-detail.component.css']
})
export class ConsulterPersonneDetailComponent implements OnInit {
  personne: Personne = new Personne();
  id: string | null = '';
  signesAstro: SigneAstrologique[] = []
  genres: Genre[] = []

  constructor(private personneService: PersonneServiceService, private route: ActivatedRoute, private enumerationService: EnumerationService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      this.id = res.get('id')
    })
    this.enumerationService.loadSignesAstro().subscribe(res => {
      this.signesAstro = res;
      this.enumerationService.loadGenres().subscribe(res => {
        this.genres = res
        this.personneService.getPersonne(this.id ? this.id : '').subscribe(res => {
          this.personne = res;
          // @ts-ignore
          this.personne.signeAstrologique = this.signesAstro.find(s => s.id == this.personne.idSigneAstrologique).libelle
          // @ts-ignore
          this.personne.genre = this.genres.find(g => g.id == this.personne.idGenre).libelle
        })
      })
    });
  }

}
