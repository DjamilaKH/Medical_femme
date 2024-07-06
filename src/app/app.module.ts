import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { InscritPatientComponent } from './inscrit-patient/inscrit-patient.component';
import { InscritMedecinComponent } from './inscrit-medecin/inscrit-medecin.component';
import { DetailleMedecienComponent } from './detaille-medecien/detaille-medecien.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccueilComponent,
    ServiceComponent,
    GalleryComponent,
    ContactComponent,
    BlogComponent,
    AppointmentComponent,
    NavbarComponent,
    FooterComponent,
    ListeMedecinComponent,
    RendezVousComponent,
    InscritPatientComponent,
    InscritMedecinComponent,
    DetailleMedecienComponent,
    ConnexionComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
