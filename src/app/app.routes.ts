import { CartComponent } from "./pages/cart/cart.component";
import { ProListComponent } from "./pages/pro-list/pro-list.component";
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        component:ProListComponent

    },
    {
        
        path:"cart",
        component:CartComponent

    }
];
