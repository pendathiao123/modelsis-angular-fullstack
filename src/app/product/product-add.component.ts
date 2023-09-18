import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { Product, ProductType } from './product.model'; // Importez le modèle Product

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  name: string = '';
  typeId: number | undefined; // Nouveau champ pour stocker l'ID du type de produit sélectionné
  createdDate: Date = new Date();
  productTypes: ProductType[] = []; // Tableau pour stocker les types de produit
  errorMessage: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    // Chargez les types de produits disponibles lors de l'initialisation du composant
    this.productService.getProductTypes().subscribe(
      (types) => {
        this.productTypes = types;
      },
      (error) => {
        this.errorMessage = 'Erreur lors du chargement des types de produits.';
      }
    );
  }

  onSubmit() {
    if (this.typeId === undefined) {
      this.errorMessage = 'Veuillez sélectionner un type de produit.';
      return;
    }

    this.productService.addProduct(this.name, this.typeId, this.createdDate).subscribe(
      () => {
        // Redirection réussie
        this.router.navigate(['/products']);
      },
      (error) => {
        // Gestion des erreurs
        this.errorMessage = error;
      }
    );
  }
}
