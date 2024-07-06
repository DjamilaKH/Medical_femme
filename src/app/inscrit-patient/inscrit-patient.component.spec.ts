import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritPatientComponent } from './inscrit-patient.component';

describe('InscritPatientComponent', () => {
  let component: InscritPatientComponent;
  let fixture: ComponentFixture<InscritPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscritPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscritPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
