import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassagereservationComponent } from './massagereservation.component';

describe('MassagereservationComponent', () => {
  let component: MassagereservationComponent;
  let fixture: ComponentFixture<MassagereservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassagereservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassagereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
