import { Component } from '@angular/core';
import {CardComponent} from '../../components/card/card.component';
import {ProductModel} from '../../models/productmodels';
import {Router} from '@angular/router';
import {ProductService} from '../../services/products/product.service';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productHome: ProductModel[] = []
  item!: ProductModel;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {
    console.log(this.productService.productList)
    this.productHome = this.productService.productList
  }

  navigateToDetail(name: string) {
    this.router.navigate(['/detail', name]).then();
  }

}
