import { Component, Type} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {NgOptimizedImage} from '@angular/common';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatIconModule,
    MatIconButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router
  ) {

  }
  navigateToCart(){
    this.router.navigate(['/cart']).then();
  }
}
