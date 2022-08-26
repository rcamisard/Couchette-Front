import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ConsulterRencontresComponent} from "./module/consulter-rencontres/consulter-rencontres.component";
import {AjouterRencontreComponent} from "./module/ajouter-rencontre/ajouter-rencontre.component";
import {LoginComponent} from "./module/login/login.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {CreerCompteComponent} from "./module/creer-compte/creer-compte.component";
import {AjouterPersonneComponent} from "./module/ajouter-personne/ajouter-personne.component";
import {ConsulterPersonnesComponent} from "./module/consulter-personnes/consulter-personnes.component";
import {ConsulterPersonneDetailComponent} from "./module/consulter-personne-detail/consulter-personne-detail.component";
import {
  ConsulterRencontreDetailComponent
} from "./module/consulter-rencontre-detail/consulter-rencontre-detail.component";

const routes: Routes = [
  { path: 'consulterRencontres', component: ConsulterRencontresComponent, canActivate: [AuthGuardService] },
  { path: 'ajouterRencontre', component: AjouterRencontreComponent, canActivate: [AuthGuardService]},
  { path: 'creerCompte', component: CreerCompteComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ajouterPersonne', component: AjouterPersonneComponent, canActivate: [AuthGuardService]},
  { path: 'consulterPersonnes', component: ConsulterPersonnesComponent, canActivate: [AuthGuardService]},
  { path: 'consulterPersonneDetail/:id', component: ConsulterPersonneDetailComponent, canActivate: [AuthGuardService]},
  { path: 'consulterRencontreDetail/:id', component: ConsulterRencontreDetailComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
