import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPersonneSnackbarComponent } from './supprimer-personne-snackbar.component';

describe('SupprimerPersonneSnackbarComponent', () => {
  let component: SupprimerPersonneSnackbarComponent;
  let fixture: ComponentFixture<SupprimerPersonneSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerPersonneSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerPersonneSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
