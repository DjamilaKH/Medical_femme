import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleMedecienComponent } from './detaille-medecien.component';

describe('DetailleMedecienComponent', () => {
  let component: DetailleMedecienComponent;
  let fixture: ComponentFixture<DetailleMedecienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailleMedecienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailleMedecienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
