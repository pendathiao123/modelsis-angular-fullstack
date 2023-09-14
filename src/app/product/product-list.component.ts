import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  showAddForm() {
    this.router.navigate(['/add']);
  }

  deleteProduct(productId: number) {
    // Appelez le service pour supprimer le produit en utilisant l'ID
    this.productService.deleteProduct(productId).subscribe(() => {
      // Mettez à jour la liste des produits après la suppression
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
      });
    });
  }

  onAddProductTypeClick() {
    // Rediriger l'utilisateur vers la page d'ajout de type de produit
    this.router.navigate(['/add-product-type']);
  }
}
