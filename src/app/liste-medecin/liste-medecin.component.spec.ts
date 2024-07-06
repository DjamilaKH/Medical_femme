import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMedecinComponent } from './liste-medecin.component';

describe('ListeMedecinComponent', () => {
  let component: ListeMedecinComponent;
  let fixture: ComponentFixture<ListeMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeMedecinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
