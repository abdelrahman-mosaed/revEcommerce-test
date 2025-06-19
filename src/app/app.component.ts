import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ProListComponent } from "./pages/pro-list/pro-list.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProListComponent,CommonModule],
  template:`<app-header></app-header>,<app-pro-list></app-pro-list>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angCOMMER';
}
