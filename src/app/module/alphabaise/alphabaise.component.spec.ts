import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabaiseComponent } from './alphabaise.component';

describe('AlphabaiseComponent', () => {
  let component: AlphabaiseComponent;
  let fixture: ComponentFixture<AlphabaiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabaiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphabaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
