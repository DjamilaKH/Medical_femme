import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  role: string='';

  constructor(private router: Router) {}
  redirectToForm() {
    if (this.role === 'patient') {
      this.router.navigate(['/sinscrirem']);
    } else if (this.role === 'medecin') {
      this.router.navigate(['/sinscrirem']);
    }
  }
}
