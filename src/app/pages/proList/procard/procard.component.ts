import { Component, input ,inject } from '@angular/core';
import { product } from '../../../models/products.model';
import { PrimaryBtnComponent } from "../../../components/primary-btn/primary-btn.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';



@Component({
  selector: 'app-procard',
  imports: [PrimaryBtnComponent,CommonModule],
  templateUrl: './procard.component.html',
  styleUrl: './procard.component.css'
})
export class ProcardComponent {
    cartService=inject(CartService)

  product=input.required<product>()

}
