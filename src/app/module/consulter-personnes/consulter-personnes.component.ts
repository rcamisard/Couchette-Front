import {Component, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Personne} from "../../models/personne";
import {PersonneServiceService} from "../../service/personne-service.service";
import {EnumerationService} from "../../service/enumeration.service";
import {SigneAstrologique} from "../../models/signeAstrologique";
import {SupprimerPersonneDialogComponent} from "../../core/components/dialog/supprimer-personne-dialog/supprimer-personne-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {
  SupprimerPersonneSnackbarComponent
} from "../../core/components/snackBar/supprimer-personne-snackbar/supprimer-personne-snackbar.component";

@Component({
  selector: 'app-consulter-personnes',
  templateUrl: './consulter-personnes.component.html',
  styleUrls: ['./consulter-personnes.component.css']
})
export class ConsulterPersonnesComponent implements OnInit {

  dataSource: MatTableDataSource<Personne> = new MatTableDataSource([new Personne()])
  columnSort: string = ""
  signesAstro: SigneAstrologique[] = [];
  constructor(private personneService: PersonneServiceService, private enumerationService : EnumerationService, private dialog : MatDialog, private suppressionSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.enumerationService.loadSignesAstro().subscribe(res => {
      this.signesAstro = res
      this.loadDataTable()
    })
  }

  loadDataTable(){
    this.personneService.getPersonnes().subscribe(res => {
      res.forEach(personne => { // @ts-ignore
        // @ts-ignore
        personne.signeAstrologique = this.signesAstro.find(s => s.id == personne.idSigneAstrologique)? this.signesAstro.find(s => s.id == personne.idSigneAstrologique).libelle : ''
      })
      this.dataSource = new MatTableDataSource<Personne>(res)
    })
  }
  deletePersonne(id: string) {
    this.personneService.deletePersonne(id).subscribe(res => {
      this.loadDataTable()
    });
  }

  openDialog(id : string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = id;
    let dialogBox = this.dialog.open(SupprimerPersonneDialogComponent, dialogConfig);

    dialogBox.afterClosed().subscribe(res => {
      if (res['event'] == 'Delete'){
        this.deletePersonne(res['data'])
        this.suppressionSnackBar.openFromComponent(SupprimerPersonneSnackbarComponent, {
          duration: 3000
        });
      }
    })
  }

}
