import { Component } from '@angular/core';

@Component({
  selector: 'app-inscrit-patient',
  templateUrl: './inscrit-patient.component.html',

})
export class InscritPatientComponent {
  constructor() { }

  onSubmit(form: any) {
    console.log('Formulaire soumis :', form.value);
    // Ajoutez ici la logique pour envoyer les données au backend
  }}
