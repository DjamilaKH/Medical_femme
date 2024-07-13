import { Component } from '@angular/core';

@Component({
  selector: 'app-periode-grossesse-calendrier',
  templateUrl: './periode-grossesse-calendrier.component.html',
  styleUrls: ['./periode-grossesse-calendrier.component.css']
})
export class PeriodeGrossesseCalendrierComponent {
  dernierCycle: Date | undefined;
  cycleLength = 28; // Longueur moyenne du cycle en jours
  grossesse: Date | undefined;
  result: string | undefined;

  calculerPeriode() {
    if (this.dernierCycle) {
      const prochaineDate = new Date(this.dernierCycle);
      prochaineDate.setDate(prochaineDate.getDate() + this.cycleLength);
      this.result = `Votre prochaine période commencera le ${prochaineDate.toLocaleDateString()}.`;
    }
  }

  calculerGrossesse() {
    if (this.grossesse) {
      const dateGrossesse = new Date(this.grossesse);
      dateGrossesse.setDate(dateGrossesse.getDate() + 280); // 280 jours = 40 semaines
      this.result = `Votre date d'accouchement prévue est le ${dateGrossesse.toLocaleDateString()}.`;
    }
  }
}
