import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgbDropdown, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProduitService } from '../service/produit.service';
import { LoginService } from '../service/login.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [NgbDropdownConfig]
})
export class MenuComponent implements OnInit {

  nom: string = ""
  isConnected: boolean




  constructor(config: NgbDropdownConfig, private _produitService: ProduitService, private _loginService: LoginService, private router: Router) {
    config.placement = "bottom-right";
    config.autoClose = true;
  }

  ngOnInit() {


    this._loginService.isConnected.subscribe(isConnected => this.isConnected = isConnected);

    this._loginService.loggedInUser().subscribe(
      value => {
        isNullOrUndefined(value) ? this.isConnected = false : this.isConnected = true
        console.log(this.isConnected)
      }
    );
  }

  search(pageActuelle: number) {
    this._produitService.usualSearch(pageActuelle, this.nom, "", "", 10);
  }

  goToPanier() {
    this.router.navigate(['/Panier'])
  }

  goToLoginPage() {
    this.router.navigate(['/Login'])
  }

  goToProfil() {
    this.router.navigate(['/Profil'])
  }

  goToCommande() {
    this._loginService.loggedInUser().subscribe(value => {
      console.log("test")
      this.router.navigate(['/Historique/user/' + value])
    })
  }

  deconnect() {
    this._loginService.deconnect()

  }

}
