export interface ProductType {
  id: number;
  name: string;
}

export interface Product {
  id?: number;
  name: string;
  type: ProductType; 
  createdDate?: Date;
}
