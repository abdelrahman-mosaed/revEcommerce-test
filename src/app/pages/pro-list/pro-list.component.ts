import { Component, signal } from '@angular/core';
import { product } from '../../models/products.model';
import { CommonModule } from '@angular/common';
import { ProcardComponent } from '../proList/procard/procard.component';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-pro-list',
  imports: [CommonModule,ProcardComponent,RouterModule],
  templateUrl: './pro-list.component.html',
  styleUrl: './pro-list.component.css'
})
export class ProListComponent {
  products=signal<product[]>(
    [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 10,
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      stock: 0,
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,

      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      stock: 5,
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      stock: 7,
    },
  ]
  )

}
