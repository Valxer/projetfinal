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
import { IsAdminGuard } from './is-admin-guard';
import { IsLoggedGuard } from './is-logged-guard';
import { MonpanierComponent } from './monpanier/monpanier.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnloggedGuard } from './unlogged-guard';
import { ValidationpanierComponent } from './validationpanier/validationpanier.component';

const routes: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'connexion', component: ConnexionComponent, canActivate: [UnloggedGuard]},
  {path: 'admin', component: AdminconnexionComponent},
  {path: 'inscription', component: InscriptionComponent, canActivate: [UnloggedGuard]},
  {path: 'confirmationconnexion', component: ConfirmationconnexionComponent},
  {path: 'confirmationinscription', component: ConfirmationinscriptionComponent, canActivate: [UnloggedGuard]},
  {path: 'erreurconnexion', component: ErreurconnexionComponent, canActivate: [UnloggedGuard]},
  {path: 'monpanier', component: MonpanierComponent, canActivate: [IsLoggedGuard]},
  {path: 'validationpanier', component: ValidationpanierComponent, canActivate: [IsLoggedGuard]},
  {path: 'article/:id', component: ArticleComponent},
  {path: 'gestionarticle', component: GestionarticleComponent, canActivate: [IsAdminGuard]},
  {path: 'editarticle/:id', component: EditarticleComponent, canActivate: [IsAdminGuard]},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
