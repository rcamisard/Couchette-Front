import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Personne} from "../../models/personne";
import {PersonneServiceService} from "../../service/personne-service.service";
import {SortDirection} from "@angular/material/sort";
import {Rencontre} from "../../models/rencontre";
import {RencontreService} from "../../service/rencontre.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  SupprimerPersonneDialogComponent
} from "../../core/components/dialog/supprimer-personne-dialog/supprimer-personne-dialog.component";
import {
  SupprimerPersonneSnackbarComponent
} from "../../core/components/snackBar/supprimer-personne-snackbar/supprimer-personne-snackbar.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DatePipe} from "@angular/common";
import {
  SupprimerRencontreDialogComponent
} from "../../core/components/dialog/supprimer-rencontre-dialog/supprimer-rencontre-dialog.component";

@Component({
  selector: 'app-consulter-rencontres',
  templateUrl: './consulter-rencontres.component.html',
  styleUrls: ['./consulter-rencontres.component.css']
})
export class ConsulterRencontresComponent implements OnInit {

  dataSource: MatTableDataSource<Rencontre> = new MatTableDataSource([new Rencontre()])

  constructor(private rencontreService: RencontreService,
              private personneService : PersonneServiceService,
              private dialog : MatDialog,
              private suppressionSnackbar : MatSnackBar,
              public datePipe : DatePipe) {
  }

  ngOnInit() {
    this.loadDataTable()
  }

  loadDataTable(){
    this.rencontreService.getRencontres().subscribe(res => {
      res.forEach(rencontre => {
        this.personneService.getPersonnesByIdRencontre(rencontre.id? rencontre.id : '').subscribe(personnes => {
          rencontre.personnes = personnes;
        })
      })
      this.dataSource = new MatTableDataSource<Rencontre>(res)
    })
  }

  deleteRencontre(id: string){
    this.rencontreService.supprimerRencontre(id).subscribe( res => {
      this.loadDataTable();
    })

  }

  openDialog(id : string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = id;
    let dialogBox = this.dialog.open(SupprimerRencontreDialogComponent, dialogConfig);

    dialogBox.afterClosed().subscribe(res => {
      if (res['event'] == 'Delete'){
        this.deleteRencontre(res['data']);
        this.suppressionSnackbar.openFromComponent(SupprimerPersonneSnackbarComponent, {
          duration: 3000
        });
      }
    })
  }
}
