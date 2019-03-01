import { Component, OnInit } from '@angular/core';
import { Produit } from '../model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-creer-produit-admin',
  templateUrl: './creer-produit-admin.component.html',
  styleUrls: ['./creer-produit-admin.component.css']
})
export class CreerProduitAdminComponent implements OnInit {
  msg: string = "";
  produitNew: Produit = {
    id: 0,
    nom: '',
    desc: '',
    prix: 0,
    categorie: '',
    sous_categorie: '',
    image: '',
    stock: 0,
    commande: null,
    actif: true,

  }
  constructor(private _srv: ProduitService) {
  }

  ngOnInit() {
  }

  creation() {
<<<<<<< HEAD
    this._srv.creation(this.produitNew).subscribe(
      value => console.log(value));
=======
    console.log(this.produitNew)
    this._srv.creation(this.produitNew).subscribe(value => { this.msg = 'Enregistrement réussi.' }, error => { this.msg = "Erreur lors de l'enregistrement." });
>>>>>>> ee439a323e5a484ed672bf0062671def5268caa2
  }

}