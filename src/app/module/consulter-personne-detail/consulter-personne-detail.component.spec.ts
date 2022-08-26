import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPersonneDetailComponent } from './consulter-personne-detail.component';

describe('ConsulterPersonneDetailComponent', () => {
  let component: ConsulterPersonneDetailComponent;
  let fixture: ComponentFixture<ConsulterPersonneDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPersonneDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterPersonneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
