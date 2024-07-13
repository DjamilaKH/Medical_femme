import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodeGrossesseCalendrierComponent } from './periode-grossesse-calendrier.component';

describe('PeriodeGrossesseCalendrierComponent', () => {
  let component: PeriodeGrossesseCalendrierComponent;
  let fixture: ComponentFixture<PeriodeGrossesseCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeriodeGrossesseCalendrierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeriodeGrossesseCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
