import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerRencontreDialogComponent } from './supprimer-rencontre-dialog.component';

describe('SupprimerRencontreDialogComponent', () => {
  let component: SupprimerRencontreDialogComponent;
  let fixture: ComponentFixture<SupprimerRencontreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerRencontreDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerRencontreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
