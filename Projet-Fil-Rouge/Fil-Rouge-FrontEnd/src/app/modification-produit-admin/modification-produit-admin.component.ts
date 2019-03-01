import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modification-produit-admin',
  templateUrl: './modification-produit-admin.component.html',
  styleUrls: ['./modification-produit-admin.component.css']
})
export class ModificationProduitAdminComponent implements OnInit {

  @Input() produit: Produit
  produitSave: Produit = {
    id: 302,
    nom: '',
    desc: '',
    prix: 0,
    categorie: '',
    sous_categorie: '',
    image: '',
    stock: 0,
    commande: null,
    actif: true
  }

  constructor(private _produitService: ProduitService) { }

  ngOnInit() {
  }

  modifictation() {
    this._produitService.modification(this.produitSave).subscribe()
  }

}