import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirparcelComponent } from './airparcel.component';

describe('AirparcelComponent', () => {
  let component: AirparcelComponent;
  let fixture: ComponentFixture<AirparcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirparcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirparcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
