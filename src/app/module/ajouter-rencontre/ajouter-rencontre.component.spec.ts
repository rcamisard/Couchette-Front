import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRencontreComponent } from './ajouter-rencontre.component';

describe('AjouterRencontreComponent', () => {
  let component: AjouterRencontreComponent;
  let fixture: ComponentFixture<AjouterRencontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRencontreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterRencontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
