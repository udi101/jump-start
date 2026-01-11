import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products.service';
import { ProductDetails } from '../../products.types';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {

  readonly activatedRoute = inject(ActivatedRoute);
readonly productsService = inject(ProductsService);

  id = signal<number>(this.activatedRoute.snapshot.params['id'] as number)

  productResource = rxResource({
    params: () => ({ id: this.id() }),
    stream: ({ params }) => this.productsService.getProductById(params.id)
  })
}
