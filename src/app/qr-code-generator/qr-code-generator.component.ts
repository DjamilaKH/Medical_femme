import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})
export class QrCodeGeneratorComponent {
  qrData: string = 'https://www.example.com';

  constructor() {}

  // Méthode pour mettre à jour les données du QR code
  updateQrData(event: Event) {
    const input = event.target as HTMLInputElement; // Assurer que c'est un élément HTMLInputElement
    if (input) { // Vérifier que input n'est pas null
      this.qrData = input.value; // Mettre à jour qrData avec la valeur de l'input
    }
  }
}
