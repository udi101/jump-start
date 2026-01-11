import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
} from "@angular/core";

import { rxResource, toObservable, toSignal } from "@angular/core/rxjs-interop";
import { debounceTime, map } from "rxjs";

import { ProductsService } from "../../../products.service";
import { Product } from "../../products.types";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-product-list",
  standalone: true,
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class ProductListComponent {
  readonly productsService = inject(ProductsService);
  searchText = signal<string>('');
  debouncedSearch = toSignal(toObservable(this.searchText).pipe(debounceTime(300)), { initialValue: "" });

  productsResource = rxResource({
    params: () => ({ search: this.debouncedSearch() }),
    stream: ({ params }) =>
      this.productsService
        .getProductsByText(params.search)
        .pipe(map((data) => data.products as Product[])),
  });

  constructor() {}

  changeText(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
    this.searchText.set(value);
  }

  addToMyList(product: Product) {
    this.productsService.addToMyList(product);
  }
}
