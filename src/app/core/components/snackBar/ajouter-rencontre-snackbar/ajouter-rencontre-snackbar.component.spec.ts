import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRencontreSnackbarComponent } from './ajouter-rencontre-snackbar.component';

describe('AjouterRencontreSnackbarComponent', () => {
  let component: AjouterRencontreSnackbarComponent;
  let fixture: ComponentFixture<AjouterRencontreSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRencontreSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterRencontreSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
