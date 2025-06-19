import { Component, inject } from '@angular/core';
import { PrimaryBtnComponent } from "../primary-btn/primary-btn.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryBtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartService=inject(CartService)
  showbtn(){
    console.log('show btn ')
  }

}
