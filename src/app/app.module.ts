import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { ConfirmationconnexionComponent } from './confirmationconnexion/confirmationconnexion.component';
import { ConfirmationinscriptionComponent } from './confirmationinscription/confirmationinscription.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ErreurconnexionComponent } from './erreurconnexion/erreurconnexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ArticleComponent } from './article/article.component';
import { MonpanierComponent } from './monpanier/monpanier.component';
import { ValidationpanierComponent } from './validationpanier/validationpanier.component';
import { ErreurcommandeComponent } from './erreurcommande/erreurcommande.component';
import { AdminconnexionComponent } from './adminconnexion/adminconnexion.component';
import { GestionarticleComponent } from './gestionarticle/gestionarticle.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ConfirmationconnexionComponent,
    ConfirmationinscriptionComponent,
    CatalogueComponent,
    ConnexionComponent,
    ErreurconnexionComponent,
    InscriptionComponent,
    ArticleComponent,
    MonpanierComponent,
    ValidationpanierComponent,
    ErreurcommandeComponent,
    AdminconnexionComponent,
    GestionarticleComponent,
    EditarticleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
