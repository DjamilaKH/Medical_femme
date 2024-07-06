import { Component} from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'] 
})
export class ConnexionComponent{
  constructor() { }
  
  onSubmit(form: any) {
    console.log('Formulaire soumis :', form.value);
    // Ajoutez ici la logique pour envoyer les données au backend
  }
}
