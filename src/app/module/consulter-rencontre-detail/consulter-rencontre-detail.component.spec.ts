import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterRencontreDetailComponent } from './consulter-rencontre-detail.component';

describe('ConsulterRencontreDetailComponent', () => {
  let component: ConsulterRencontreDetailComponent;
  let fixture: ComponentFixture<ConsulterRencontreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterRencontreDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterRencontreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
