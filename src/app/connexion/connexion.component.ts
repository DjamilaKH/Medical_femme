import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'] 
})
export class ConnexionComponent{
  constructor(private router:Router , private appComponent: AppComponent) { }
  
  onSubmit(form: any) {
    console.log('Formulaire soumis :', form.value);
    // Ajoutez ici la logique pour envoyer les données au backend
    this.appComponent.updateLoginStatus(true);
this.router.navigate(['/accueil'])
  }
}
