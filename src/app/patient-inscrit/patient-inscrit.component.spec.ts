import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInscritComponent } from './patient-inscrit.component';

describe('PatientInscritComponent', () => {
  let component: PatientInscritComponent;
  let fixture: ComponentFixture<PatientInscritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientInscritComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientInscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
