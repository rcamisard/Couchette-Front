import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerRencontreSnackbarComponent } from './supprimer-rencontre-snackbar.component';

describe('SupprimerRencontreSnackbarComponent', () => {
  let component: SupprimerRencontreSnackbarComponent;
  let fixture: ComponentFixture<SupprimerRencontreSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerRencontreSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerRencontreSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
