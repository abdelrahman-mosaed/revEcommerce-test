import { Injectable, signal } from '@angular/core';
import { product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart=signal<product[]>([]);
  addtoCard(product:product){
    this.cart.set([...this.cart(),product])
  }

  constructor() { }
}
