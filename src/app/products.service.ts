import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Product, ProductDetails } from "./products/products.types";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  readonly httpClient = inject(HttpClient);

  getProductsByText = (search = "") => {
    return this.httpClient.get<{ products: Product[] }>(
      "https://dummyjson.com/products/search?q=" + search
    );
  };

  getProductById = (id: number) => {
    return this.httpClient.get<ProductDetails>(
      "https://dummyjson.com/products/" + id
    );
  };

  constructor() {}

  addToMyList(product: Product) {
    const myList = this.myList();
    if (myList.find((s) => s.id === product.id)) {
      return;
    }
    this.myList.set([...myList, product]);
  }

  myList = signal<Product[]>([]);
}
