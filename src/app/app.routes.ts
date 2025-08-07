import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';


export const routes: Routes = [
  {
    path:'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path:'detail/:name',
    loadComponent: () => import('./pages/detail/detail.component').then(m => m.DetailComponent),
  },
  {
    path:'cart',
    loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent),
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/notfound/notfound.component').then(m => m.NotfoundComponent),
  }
];

