import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ListeMedecinComponent } from './liste-medecin/liste-medecin.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscritMedecinComponent } from './inscrit-medecin/inscrit-medecin.component';
import { PatientInscritComponent } from './patient-inscrit/patient-inscrit.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent},

  { path: '', redirectTo: '/connexion', pathMatch: 'full' }, 
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'listMedecin', component: ListeMedecinComponent },
  { path: 'rendez-vous', component: RendezVousComponent },
  { path: 'inscripa', component:PatientInscritComponent},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscrimed', component: InscritMedecinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
