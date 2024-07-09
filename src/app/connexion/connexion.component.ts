import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'] 
})
export class ConnexionComponent{
  constructor(private router:Router) { }
  
  onSubmit(form: any) {
    console.log('Formulaire soumis :', form.value);
    // Ajoutez ici la logique pour envoyer les données au backend
this.router.navigate(['/accueil'])
  }
}
