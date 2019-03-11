import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commande, CommandeDto } from '../model'
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  idModif: number
  refModif: string
  prixTotalModif: number


  constructor(private _http: HttpClient) { }


  afficher(): Observable<Commande[]> {
    return this._http.get<Commande[]>("http://localhost:8080/Historique", httpOptions)
  }

  getListeCommandeUser(id: number): Observable<Commande[]> {
    console.log(id)
    return this._http.get<Commande[]>("http://localhost:8080/Historique/user/" + id, httpOptions)
  }

  getCommande(id: number): Observable<Commande> {
    return this._http.get<Commande>("http://localhost:8080/Historique/" + id, httpOptions);
  }

  setIdModification(id: number) {
    this.idModif = id
  }
  // setRefModification(ref: string) {
  //   this.refModif = ref
  // }
  // setPrixTotalModification(prixTotal: number) {
  //   this.prixTotalModif = prixTotal
  // }
  getIdModification(): Observable<Commande> {
    return this._http.get<Commande>("http://localhost:8080/Historique/" + this.idModif, httpOptions)
  }

  deleteCommande(): Observable<Object> {
    console.log(this.idModif)
    return this._http.delete("http://localhost:8080/Historique/" + this.idModif, httpOptions)
  }

  ajouterCommande(commande: Commande) {
    this._http.post("http://localhost:8080/Historique", commande, httpOptions).subscribe();
  }

  ajouterCommandeDto(commande: CommandeDto) {
    this._http.post("http://localhost:8080/Historique", commande, httpOptions).subscribe();
  }
  modifCommande(commande: Commande): Observable<Object> {
    console.log("Est ce que ca marche ?")
    return this._http.put("http://localhost:8080/Historique", commande, httpOptions)
  }

  rechercheBy(nom: string, prenom: string, prix: number): Observable<Commande[]> {
    if (nom === "")
      nom = "default"
    if (prenom === "")
      prenom = "default"
    return this._http.get<Commande[]>("http://localhost:8080/Historique/" + nom + "/" + prenom + "/" + prix, httpOptions)
  }
}


