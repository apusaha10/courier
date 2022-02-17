import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinehaulComponent } from './linehaul.component';

describe('LinehaulComponent', () => {
  let component: LinehaulComponent;
  let fixture: ComponentFixture<LinehaulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinehaulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinehaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
