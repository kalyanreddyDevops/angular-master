import {Routes} from "@angular/router";
import { ProductHomeComponent } from "./components/product-home/product-home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { ProductSearchComponent } from "./components/product-search/product-search.component";
import { AuthGuard, AdminGuard } from "../auth/auth.guards";

export const routes:Routes = [
    {
        path: '',
        component: ProductHomeComponent,
        //for authentication
 canActivate: [AuthGuard],
        children: [
            {
                path: 'list', //locahost/products/list
                component: ProductListComponent
            },
            {
                path: 'create',
                component: ProductEditComponent,
                canActivate:[AdminGuard]
            },
            {
                path: 'edit/:id',
                component: ProductEditComponent,
                canActivate:[AdminGuard]
            },
            {
                path: 'search',
                component: ProductSearchComponent
            }
        ]
    }

]