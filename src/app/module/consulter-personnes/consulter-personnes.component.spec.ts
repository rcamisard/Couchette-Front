import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPersonnesComponent } from './consulter-personnes.component';

describe('ConsulterPersonnesComponent', () => {
  let component: ConsulterPersonnesComponent;
  let fixture: ComponentFixture<ConsulterPersonnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPersonnesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterPersonnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
