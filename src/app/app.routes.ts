import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'product-list',
    loadComponent: () =>
      import('./products/components/product-list/product-list.component').then(
        (c) => c.ProductListComponent
      ),
  },
  {
    path: 'my-list',
    loadComponent: () => import('./products/components/my-list/my-list.component').then(
      (c) => c.MyListComponent
    ),
  },
  {
    path: 'product-details/:id',
    loadComponent: () => import('./products/components/product-details/product-details.component').then(
      (c) => c.ProductDetailsComponent
    )
  }
];
