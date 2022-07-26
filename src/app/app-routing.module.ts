import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleComponent } from './article/article.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ConfirmationconnexionComponent } from './confirmationconnexion/confirmationconnexion.component';
import { ConfirmationinscriptionComponent } from './confirmationinscription/confirmationinscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ErreurconnexionComponent } from './erreurconnexion/erreurconnexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'confirmationconnexion', component: ConfirmationconnexionComponent},
  {path: 'confirmationinscription', component: ConfirmationinscriptionComponent},
  {path: 'erreurconnexion', component: ErreurconnexionComponent},
  {path: 'article/:id', component: ArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
