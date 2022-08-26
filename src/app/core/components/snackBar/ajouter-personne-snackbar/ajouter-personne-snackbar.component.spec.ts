import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPersonneSnackbarComponent } from './ajouter-personne-snackbar.component';

describe('AjouterPersonneSnackbarComponent', () => {
  let component: AjouterPersonneSnackbarComponent;
  let fixture: ComponentFixture<AjouterPersonneSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPersonneSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPersonneSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
