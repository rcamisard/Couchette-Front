import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Event} from "@angular/router";

@Component({
  selector: 'app-supprimer-personne-snackbar-dialog',
  templateUrl: './supprimer-personne-dialog.component.html',
  styleUrls: ['./supprimer-personne-dialog.component.css']
})
export class SupprimerPersonneDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SupprimerPersonneDialogComponent>, @Inject(MAT_DIALOG_DATA) public id: string) {
}

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close({event: 'Cancel'});
  }

  supprimerEvent(event: MouseEvent){
    this.dialogRef.close({event: 'Delete', data: this.id});
  }
}
