import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AdminconnexionComponent } from './adminconnexion/adminconnexion.component';
import { ArticleComponent } from './article/article.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ConfirmationconnexionComponent } from './confirmationconnexion/confirmationconnexion.component';
import { ConfirmationinscriptionComponent } from './confirmationinscription/confirmationinscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditarticleComponent } from './editarticle/editarticle.component';
import { ErreurconnexionComponent } from './erreurconnexion/erreurconnexion.component';
import { GestionarticleComponent } from './gestionarticle/gestionarticle.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MonpanierComponent } from './monpanier/monpanier.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ValidationpanierComponent } from './validationpanier/validationpanier.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'admin', component: AdminconnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'confirmationconnexion', component: ConfirmationconnexionComponent},
  {path: 'confirmationinscription', component: ConfirmationinscriptionComponent},
  {path: 'erreurconnexion', component: ErreurconnexionComponent},
  {path: 'monpanier', component: MonpanierComponent},
  {path: 'validationpanier', component: ValidationpanierComponent},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'gestionarticle', component: GestionarticleComponent},
  {path: 'editarticle/:id', component: EditarticleComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
