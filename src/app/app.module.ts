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
import { InscritMedecinComponent } from './inscrit-medecin/inscrit-medecin.component';
import { DetailleMedecienComponent } from './detaille-medecien/detaille-medecien.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { PatientInscritComponent } from './patient-inscrit/patient-inscrit.component';
import { environment } from './environnelent';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PeriodeGrossesseCalendrierComponent } from './periode-grossesse-calendrier/periode-grossesse-calendrier.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
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
   
    InscritMedecinComponent,
    DetailleMedecienComponent,
    ConnexionComponent,
    AdminComponent,
    PatientInscritComponent,
    PeriodeGrossesseCalendrierComponent,
    QrCodeGeneratorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,

    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
