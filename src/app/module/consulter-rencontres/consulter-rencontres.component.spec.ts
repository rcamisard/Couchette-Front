import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterRencontresComponent } from './consulter-rencontres.component';

describe('ConsulterRencontresComponent', () => {
  let component: ConsulterRencontresComponent;
  let fixture: ComponentFixture<ConsulterRencontresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterRencontresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterRencontresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
