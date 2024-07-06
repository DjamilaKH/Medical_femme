import { Component } from '@angular/core';

@Component({
  selector: 'app-inscrit-medecin',
  templateUrl: './inscrit-medecin.component.html',
  styleUrl: './inscrit-medecin.component.css'
})
export class InscritMedecinComponent {

  constructor() { }

  onSubmit(form: any) {
    // Ici, vous pouvez gérer la soumission du formulaire, par exemple en envoyant les données au serveur
    console.log('Formulaire soumis :', form.value);
    // Ajoutez ici la logique pour envoyer les données au backend
  }

  previewPhoto(event: any) {
    const preview = document.getElementById('photoPreview') as HTMLImageElement;
    preview.style.display = 'block';
    preview.src = URL.createObjectURL(event.target.files[0]);
  }
}
