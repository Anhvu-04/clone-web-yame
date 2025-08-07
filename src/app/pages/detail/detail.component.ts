import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/products/product.service';
import {ProductModel} from '../../models/productmodels';
import {CardComponent} from '../../components/card/card.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-detail',
  imports: [
    CardComponent,
    MatIconModule,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  productDetail !: ProductModel

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    let {name} = activateRoute.snapshot.params;
    this.productDetail = this.productService.getDetailProduct(name);
  }
}
