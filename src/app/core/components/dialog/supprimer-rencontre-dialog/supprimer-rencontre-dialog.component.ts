import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-supprimer-rencontre-dialog',
  templateUrl: './supprimer-rencontre-dialog.component.html',
  styleUrls: ['./supprimer-rencontre-dialog.component.css']
})
export class SupprimerRencontreDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SupprimerRencontreDialogComponent>, @Inject(MAT_DIALOG_DATA) public id: string) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close({event: 'Cancel'});
  }

  supprimerEvent(event: MouseEvent){
    this.dialogRef.close({event: 'Delete', data: this.id});
  }
}
