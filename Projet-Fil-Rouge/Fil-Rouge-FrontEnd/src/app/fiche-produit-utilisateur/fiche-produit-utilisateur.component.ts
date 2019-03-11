import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';
import { PanierService } from '../service/panier.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-fiche-produit-utilisateur',
  templateUrl: './fiche-produit-utilisateur.component.html',
  styleUrls: ['./fiche-produit-utilisateur.component.css']
})
export class FicheProduitUtilisateurComponent implements OnInit {


  @Input() produit: Produit

  constructor(private _panierService: PanierService, private _produitService: ProduitService) { }

  ngOnInit() {
  }

  ajouterPanier() {
    // console.log(this.produit)
    this._panierService.ajoutproduitPanier(this.produit)
  }

  setId(id: number) {
    console.log(this.produit)
    this._produitService.setIdModification(id);
  }

}
