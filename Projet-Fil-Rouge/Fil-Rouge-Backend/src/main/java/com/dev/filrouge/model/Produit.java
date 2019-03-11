package com.dev.filrouge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "produit")
@SequenceGenerator(name = "seq_produit_id")
public class Produit {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_produit_id")
	Long id;
	@Column
	String nom;
	@Column
	String description;
	@Column
	float prix;
	@Column
	String categorie;
	@Column
	String sousCategorie;
	@Column
	String image;
	@Column
	int stock;
	@Column
	boolean actif;

	public Produit() {

	}

	public Produit(Long id) {
		this.id = id;
	}

	public Produit(Long id,String nom, String description, float prix, String categorie, String sousCategorie, String image,
			int stock, boolean actif) {
		super();
		this.id=id;
		this.nom = nom;
		this.description = description;
		this.prix = prix;
		this.categorie = categorie;
		this.sousCategorie = sousCategorie;
		this.image = image;
		this.stock = stock;
		this.actif = actif;
	}
	
	public Produit(String nom, String description, float prix, String categorie, String sousCategorie, String image,
			int stock, boolean actif) {
		super();
		this.nom = nom;
		this.description = description;
		this.prix = prix;
		this.categorie = categorie;
		this.sousCategorie = sousCategorie;
		this.image = image;
		this.stock = stock;
		this.actif = actif;
	}
	
	public boolean isActif() {
		return actif;
	}

	public void setActif(boolean actif) {
		this.actif = actif;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public String getCategorie() {
		return categorie;
	}
                 
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getSousCategorie() {
		return sousCategorie;
	}

	public void setSousCategorie(String sousCategorie) {
		this.sousCategorie = sousCategorie;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public Long getId() {
		return id;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (actif ? 1231 : 1237);
		result = prime * result + ((categorie == null) ? 0 : categorie.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((image == null) ? 0 : image.hashCode());
		result = prime * result + ((nom == null) ? 0 : nom.hashCode());
		result = prime * result + Float.floatToIntBits(prix);
		result = prime * result + ((sousCategorie == null) ? 0 : sousCategorie.hashCode());
		result = prime * result + stock;
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
		Produit other = (Produit) obj;
		if (actif != other.actif)
			return false;
		if (categorie == null) {
			if (other.categorie != null)
				return false;
		} else if (!categorie.equals(other.categorie))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (image == null) {
			if (other.image != null)
				return false;
		} else if (!image.equals(other.image))
			return false;
		if (nom == null) {
			if (other.nom != null)
				return false;
		} else if (!nom.equals(other.nom))
			return false;
		if (Float.floatToIntBits(prix) != Float.floatToIntBits(other.prix))
			return false;
		if (sousCategorie == null) {
			if (other.sousCategorie != null)
				return false;
		} else if (!sousCategorie.equals(other.sousCategorie))
			return false;
		if (stock != other.stock)
			return false;
		return true;
	}

}