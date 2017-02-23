import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {ProductListComponent} from "./product-list.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
    declarations: [
        ProductListComponent,
    ],

    imports: [
        SharedModule
    ],
    providers: [

    ]
})

export class ProductModule {}
