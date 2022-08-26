import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerPersonneDialogComponent } from './supprimer-personne-dialog.component';

describe('SupprimerPersonneDialogComponent', () => {
  let component: SupprimerPersonneDialogComponent;
  let fixture: ComponentFixture<SupprimerPersonneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerPersonneDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerPersonneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
