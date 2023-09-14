import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product, ProductType } from './product.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/test_recrutement';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/product/all`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`);
  }

  addProduct(name: string, typeId: number, createdDate: Date): Observable<any> {
    const product: Product = { name, type: { id: typeId, name: '' }, createdDate };

    return this.http
      .post(`${this.apiUrl}/Product`, product)
      .pipe(
        catchError((error) => {
          if (error.status === 400) {
            return throwError('Ce nom existe déjà.');
          }
          return throwError('Une erreur est survenue lors de l\'ajout du produit.');
        })
      );
  }

  addProductType(name: string): Observable<ProductType> {
    const productType = { name }; // Créez un objet ProductType avec le nom seulement
    return this.http.post<ProductType>(`${this.apiUrl}/product-types/ProductType`, productType);
  }

  getProductTypes(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${this.apiUrl}/product-types/all`);
  }


  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/product/update?id=${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/product/delete?id=${id}`);
  }
}
