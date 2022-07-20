import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareservationComponent } from './spareservation.component';

describe('SpareservationComponent', () => {
  let component: SpareservationComponent;
  let fixture: ComponentFixture<SpareservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpareservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
