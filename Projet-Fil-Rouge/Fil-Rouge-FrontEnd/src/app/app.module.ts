import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { ROUTES } from "./app.routes"
import { RouterModule } from '@angular/router';
import { CreerProduitAdminComponent } from './creer-produit-admin/creer-produit-admin.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { HistoCommandesAdminComponent } from './histo-commandes-admin/histo-commandes-admin.component';
import { ListeProduitsAdminComponent } from './liste-produits-admin/liste-produits-admin.component';
import { FicheDetailProduitComponent } from './fiche-detail-produit/fiche-detail-produit.component';
import { PanierComponent } from './panier/panier.component';
import { FicheDetailProduitPanierComponent } from './fiche-detail-produit-panier/fiche-detail-produit-panier.component';
import { ListeProduitsUtilisateurComponent } from './liste-produits-utilisateur/liste-produits-utilisateur.component';
import { FicheProduitUtilisateurComponent } from './fiche-produit-utilisateur/fiche-produit-utilisateur.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilComponent } from './profil/profil.component';
import { ListeProduitCommandeAdminComponent } from './liste-produit-commande-admin/liste-produit-commande-admin.component';
import { ModificationProduitAdminComponent } from './modification-produit-admin/modification-produit-admin.component';
import { PageModifCommandeAdminComponent } from './page-modif-commande-admin/page-modif-commande-admin.component';
import { CommandeUtilisateurComponent } from './commande-utilisateur/commande-utilisateur.component';
import { UnauthorizedInterceptor } from './interceptor/unauthorizedInterceptor';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListeProduitComponent,
    ProduitComponent,
    AccueilComponent,
    MenuAdminComponent,
    DropdownComponent,
    AccueilAdminComponent,
    CreerProduitAdminComponent,
    LoginPageComponent,
    MenuComponent,
    SearchComponent,
    ModificationProduitAdminComponent,
    HistoCommandesAdminComponent,
    ListeProduitsAdminComponent,
    FicheDetailProduitComponent,
    PanierComponent,
    SafePipe,
    FicheDetailProduitPanierComponent,
    ListeProduitsUtilisateurComponent,
    FicheProduitUtilisateurComponent,
    FicheProduitComponent,
    SignUpComponent,
    FooterComponent,
    ProfilComponent,
    ListeProduitCommandeAdminComponent,
    PageModifCommandeAdminComponent,
    CommandeUtilisateurComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
