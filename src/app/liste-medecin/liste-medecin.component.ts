import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Fonctions à définir pour chaque bouton
  lireSuite() {
    // Logique pour "Lire suite"
  }

  rendezVous() {
    // Logique pour "Rendez-vous"
  }

  annuler() {
    // Logique pour "Annuler"
  }


}
