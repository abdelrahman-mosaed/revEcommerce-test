import { Component, inject } from '@angular/core';
import { PrimaryBtnComponent } from "../primary-btn/primary-btn.component";
import { CartService } from '../../services/cart.service';
import { RouterLink ,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryBtnComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartService=inject(CartService)
 

}
