import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle, MatCardTitleGroup} from '@angular/material/card';
import {ProductService} from '../../services/products/product.service';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {ProductModel} from '../../models/productmodels';

@Component({
  selector: 'app-cart',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    DecimalPipe,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartList: ProductModel[] = []
  totalPrice: number = 0;
  constructor(public productService: ProductService)  {
  }
  totalCart(priceDiscount: number){
    this.cartList = this.productService.cartList;
    this.totalPrice = this.productService.getTotalPrice();
  }
  ngOnInit() {
    this.totalPrice = this.productService.getTotalPrice();
  }
}
