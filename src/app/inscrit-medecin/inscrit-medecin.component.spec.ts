import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritMedecinComponent } from './inscrit-medecin.component';

describe('InscritMedecinComponent', () => {
  let component: InscritMedecinComponent;
  let fixture: ComponentFixture<InscritMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscritMedecinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscritMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
