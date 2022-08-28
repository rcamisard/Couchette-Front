import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button"
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { MenuComponent } from './core/components/layout/menu/menu.component';
import { HeaderComponent } from './core/components/layout/header/header.component';
import {MatListModule} from "@angular/material/list";
import {MatExpansionModule} from "@angular/material/expansion";
import { ConsulterRencontresComponent } from './module/consulter-rencontres/consulter-rencontres.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { AjouterRencontreComponent } from './module/ajouter-rencontre/ajouter-rencontre.component';
import { LoginComponent } from './module/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import { CreerCompteComponent } from './module/creer-compte/creer-compte.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { AjouterPersonneComponent } from './module/ajouter-personne/ajouter-personne.component';
import {MatSelectModule} from "@angular/material/select";
import { ConsulterPersonnesComponent } from './module/consulter-personnes/consulter-personnes.component';
import { ConsulterPersonneDetailComponent } from './module/consulter-personne-detail/consulter-personne-detail.component';
import { SupprimerPersonneDialogComponent } from './core/components/dialog/supprimer-personne-dialog/supprimer-personne-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSliderModule} from "@angular/material/slider";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { AjouterPersonneSnackbarComponent } from './core/components/snackBar/ajouter-personne-snackbar/ajouter-personne-snackbar.component';
import { SupprimerPersonneSnackbarComponent } from './core/components/snackBar/supprimer-personne-snackbar/supprimer-personne-snackbar.component';
import { AjouterRencontreSnackbarComponent } from './core/components/snackBar/ajouter-rencontre-snackbar/ajouter-rencontre-snackbar.component';
import {DatePipe} from "@angular/common";
import { SupprimerRencontreDialogComponent } from './core/components/dialog/supprimer-rencontre-dialog/supprimer-rencontre-dialog.component';
import { SupprimerRencontreSnackbarComponent } from './core/components/snackBar/supprimer-rencontre-snackbar/supprimer-rencontre-snackbar.component';
import { ConsulterRencontreDetailComponent } from './module/consulter-rencontre-detail/consulter-rencontre-detail.component';
import {SpinnerInterceptorService} from "./service/spinner/interceptor/spinner-interceptor.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AlphabaiseComponent } from './module/alphabaise/alphabaise.component';
import { StatistiquesComponent } from './module/statistiques/statistiques.component';
import { NgxChartsModule} from "@swimlane/ngx-charts";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ConsulterRencontresComponent,
    AjouterRencontreComponent,
    LoginComponent,
    CreerCompteComponent,
    AjouterPersonneComponent,
    ConsulterPersonnesComponent,
    ConsulterPersonneDetailComponent,
    SupprimerPersonneDialogComponent,
    AjouterPersonneSnackbarComponent,
    SupprimerPersonneSnackbarComponent,
    AjouterRencontreSnackbarComponent,
    SupprimerRencontreDialogComponent,
    SupprimerRencontreSnackbarComponent,
    ConsulterRencontreDetailComponent,
    AlphabaiseComponent,
    StatistiquesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatExpansionModule,
    AppRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    NgxChartsModule,
    MatTabsModule
  ],
  providers: [DatePipe,   { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
