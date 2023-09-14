import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { Product, ProductType } from './product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  productId: number | null = null;
  product: Product = { name: '', type: { id: 0, name: '' }, createdDate: new Date() };
  errorMessage: string = '';
  productTypes: ProductType[] = []; // Tableau pour stocker les types de produits

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      this.productId = +idParam;

      // Appeler le service pour obtenir les détails du produit
      this.productService.getProduct(this.productId).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else {
      this.errorMessage = 'L\'ID du produit est manquant.';
    }

    // Charger les types de produits disponibles
    this.productService.getProductTypes().subscribe(
      (types) => {
        this.productTypes = types;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  onSubmit() {
    if (this.productId !== null) {
      // Appeler le service pour mettre à jour le produit
      this.productService.updateProduct(this.productId, this.product).subscribe(
        () => {
          this.router.navigate(['/products']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else {
      this.errorMessage = 'L\'ID du produit est manquant.';
    }
  }
}
