import {Component, Input} from '@angular/core';
// import {
//   MatCard,
//   MatCardActions,
//   MatCardContent,
//   MatCardHeader, MatCardImage,
//   MatCardSubtitle,
//   MatCardTitle
// } from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {ProductModel} from '../../models/productmodels';
import {ProductService} from '../../services/products/product.service';
import {DecimalPipe, NgOptimizedImage} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [
    MatButtonModule,
    DecimalPipe,
    MatIconModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  productCard: ProductModel[] = []
  @Input() item!: ProductModel;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {
    this.productCard = this.productService.productList
  }

  navigateToDetail(name: string) {
    this.router.navigate(['/detail', name]).then();
  }
}
