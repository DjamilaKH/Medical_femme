import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  // Fonctions à définir pour chaque bouton
  lireSuite() {
    this.router.navigate(['/service'])
  }

  rendezVous() {
    this.router.navigate(['/rendez-vous'])
  }


}
