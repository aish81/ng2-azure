import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductListComponent} from './products/product-list.component';
import {CustomerListComponent} from './customers/customer-list.component';
import {PageNotFoundComponent} from './shared/page-not-found.component';
import {WelcomeComponent} from "./home/welcome.component";
const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'welcome'},
    {path: 'products', component: ProductListComponent },
    {path: 'customers', component: CustomerListComponent },
    {path: 'welcome', component: WelcomeComponent },
    {path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routableComponents = [
    ProductListComponent,
    CustomerListComponent,
    PageNotFoundComponent,
    WelcomeComponent
];