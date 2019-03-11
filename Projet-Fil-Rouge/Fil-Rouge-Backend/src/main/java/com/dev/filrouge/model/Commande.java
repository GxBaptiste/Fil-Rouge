package com.dev.filrouge.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "commande")
@SequenceGenerator(name = "seq_commande_id")
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_commande_id") 
    Long id;
    @Column
    String reference;
    @ManyToOne
    Utilisateur utilisateur;
    @Column
    LocalDate dateCommande;
    @Column
    LocalDate dateLivraison;
    @Column
    float prixTotal;
    @Column
    String etat;
    @OneToMany(mappedBy = "id.commande", cascade = { CascadeType.ALL, CascadeType.PERSIST, CascadeType.MERGE }, orphanRemoval = true)
    List<ProduitCommande> produitCommandes;

    public Commande() {

    }

    public Commande(String reference, Utilisateur utilisateur, LocalDate dateCommande, LocalDate dateLivraison, float prixTotal, String etat, List<ProduitCommande> produitCommandes) {
    	this.reference = reference;
    	this.utilisateur = utilisateur;
        this.dateCommande = dateCommande;
        this.dateLivraison = dateLivraison;
        this.prixTotal = prixTotal;
        this.etat = etat;
        this.produitCommandes = produitCommandes;
    }

    public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReference() {
        return this.reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public LocalDate getDateCommande() {
        return this.dateCommande;
    }

    public void setDateCommande(LocalDate dateCommande) {
        this.dateCommande = dateCommande;
    }

    public LocalDate getDateLivraison() {
        return this.dateLivraison;
    }

    public void setDateLivraison(LocalDate dateLivraison) {
        this.dateLivraison = dateLivraison;
    }

    public float getPrixTotal() {
        return this.prixTotal;
    }

    public void setPrixTotal(float prixTotal) {
        this.prixTotal = prixTotal;
    }

    public String getEtat() {
        return this.etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public List<ProduitCommande> getProduitCommandes() {
        return this.produitCommandes;
    }

    public void setProduitCommandes(List<ProduitCommande> produitCommandes) {
        this.produitCommandes = produitCommandes;
    }


    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", reference='" + getReference() + "'" +", n_client=" + getUtilisateur() + ", dateCommande='"
                + getDateCommande() + "'" + ", dateLivraison='" + getDateLivraison() + "'" + ", prixTotal='"
                + getPrixTotal() + "'" + ", etat='" + getEtat() + "'" + ", produit='" + getProduitCommandes() + "'" + "}";
    }

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dateCommande == null) ? 0 : dateCommande.hashCode());
		result = prime * result + ((dateLivraison == null) ? 0 : dateLivraison.hashCode());
		result = prime * result + ((etat == null) ? 0 : etat.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((utilisateur == null) ? 0 : utilisateur.hashCode());
		result = prime * result + Float.floatToIntBits(prixTotal);
		result = prime * result + ((produitCommandes == null) ? 0 : produitCommandes.hashCode());
		result = prime * result + ((reference == null) ? 0 : reference.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Commande other = (Commande) obj;
		if (dateCommande == null) {
			if (other.dateCommande != null)
				return false;
		} else if (!dateCommande.equals(other.dateCommande))
			return false;
		if (dateLivraison == null) {
			if (other.dateLivraison != null)
				return false;
		} else if (!dateLivraison.equals(other.dateLivraison))
			return false;
		if (etat == null) {
			if (other.etat != null)
				return false;
		} else if (!etat.equals(other.etat))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (utilisateur == null) {
			if (other.utilisateur != null)
				return false;
		} else if (!utilisateur.equals(other.utilisateur))
			return false;
		if (Float.floatToIntBits(prixTotal) != Float.floatToIntBits(other.prixTotal))
			return false;
		if (produitCommandes == null) {
			if (other.produitCommandes != null)
				return false;
		} else if (!produitCommandes.equals(other.produitCommandes))
			return false;
		if (reference == null) {
			if (other.reference != null)
				return false;
		} else if (!reference.equals(other.reference))
			return false;
		return true;
	}
}
    
    
	