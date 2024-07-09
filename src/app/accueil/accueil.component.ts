import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  slides = [
    {
      img: '../../assets/img/slider/slider-bg-1.jpg', // URL correcte pour la première image
      title: 'Our Best Surgeons',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt animi sequi ratione quod at earum. <br> Quis quos officiis numquam!',
      buttonText: 'explore'
    },
    {
      img: '../../assets/img/slider/slider-bg-1.jpg', // URL correcte pour la deuxième image
      title: 'We Care About Your Health',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      buttonText: 'about us'
    },
    {
      img: '../../assets/img/slider/slider-bg-1.jpg', // URL correcte pour la troisième image
      title: 'Best Medical Services',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt, <br>eius pariatur minus itaque nostrum.',
      buttonText: 'shop now'
    }
  ];
  currentSlide = 0;
  previousSlide = 0; // Initialisation de previousSlide

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 2000); // Change slide every 5 seconds
  }

  nextSlide() {
    this.previousSlide = this.currentSlide; // Mettre à jour previousSlide
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.previousSlide = this.currentSlide; // Mettre à jour previousSlide
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  role: string = '';

  redirectToForm() {
    if (this.role === 'patient') {
      this.router.navigate(['/sinscrirem']);
    } else if (this.role === 'medecin') {
      this.router.navigate(['/sinscrirem']);
    }
  }
}
