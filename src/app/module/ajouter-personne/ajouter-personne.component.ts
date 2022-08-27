import { Component, OnInit } from '@angular/core';
import {EnumerationService} from "../../service/enumeration.service";
import {SigneAstrologique} from "../../models/signeAstrologique";
import {Personne} from "../../models/personne";
import {PersonneServiceService} from "../../service/personne-service.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  AjouterPersonneSnackbarComponent
} from "../../core/components/snackBar/ajouter-personne-snackbar/ajouter-personne-snackbar.component";
import {Genre} from "../../models/genre";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {ConsulterRencontresComponent} from "../consulter-rencontres/consulter-rencontres.component";

@Component({
  selector: 'app-ajouter-personne-snackbar',
  templateUrl: './ajouter-personne.component.html',
  styleUrls: ['./ajouter-personne.component.css']
})
export class AjouterPersonneComponent implements OnInit {

  ages : String[] = ['18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
  signesAstro : SigneAstrologique[] = []
  genres: Genre[] = []

  // FORM
  personne : Personne = new Personne();

  constructor(private enumerationService : EnumerationService,
              private personneService : PersonneServiceService,
              private ajoutSnackBar : MatSnackBar,
              private route : Router) { }

  ngOnInit(): void {
    this.enumerationService.loadSignesAstro().subscribe( s => {
      this.signesAstro = s;
    });
    this.enumerationService.loadGenres().subscribe( g => {
      this.genres = g;
    })
  }

  ajouterPersonne(){
    this.personneService.ajoutPersonne(this.personne).subscribe( res => {
      this.ajoutSnackBar.openFromComponent(AjouterPersonneSnackbarComponent, {
        duration: 3000
      })
      this.route.navigate(['/consulterPersonnes']);
    });

  }

}
