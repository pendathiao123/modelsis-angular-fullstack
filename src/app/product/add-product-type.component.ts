// add-product-type.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-type',
  templateUrl: './add-product-type.component.html',
  styleUrls: ['./add-product-type.component.css'],
})
export class AddProductTypeComponent implements OnInit {
  typeName: string = '';
  errorMessage: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.productService.addProductType(this.typeName).subscribe(
      () => {
        this.router.navigate(['/products']);
      },
      (error) => {
        // Gestion des erreurs
        this.errorMessage = error;
      }
    );
  }

  showListForm() {
    this.router.navigate(['/add-product-type']);
  }
}
