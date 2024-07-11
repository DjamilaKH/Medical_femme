import { Component } from '@angular/core';
import { ConnexionComponent } from './connexion/connexion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Medical';
  isLoggedIn = false;

  // Méthode pour mettre à jour l'état de la connexion
  updateLoginStatus(status: boolean) {
    this.isLoggedIn = status;
  }

  onActivate(event: any) {
    // Si l'événement est le composant de connexion, mettez isLoggedIn à false
    // Si l'événement est un autre composant, mettez isLoggedIn à true
    this.isLoggedIn = !(event instanceof ConnexionComponent);
  }
}
