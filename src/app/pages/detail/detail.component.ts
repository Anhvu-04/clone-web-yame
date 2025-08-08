import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/products/product.service';
import {ProductModel} from '../../models/productmodels';
import {CardComponent} from '../../components/card/card.component';
import {MatIconModule} from '@angular/material/icon';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [
    CardComponent,
    MatIconModule,
    DecimalPipe,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  productDetail !: ProductModel
  @Input() productModel !: ProductModel;

  totalPrice: number = 0;
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) {
    let {name} = activateRoute.snapshot.params;
    this.productDetail = this.productService.getDetailProduct(name);
  }
  addToCart(name: string){
    this.productService.addProductToCart(name);
    this.router.navigate(['/cart']).then();
  }
  totalCart(priceDiscount: number){
    this.totalPrice = this.productService.getTotalPrice();
  }
}
