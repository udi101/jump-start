import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsService } from '../../../products.service';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyListComponent {

  readonly productsService = inject(ProductsService);

}
