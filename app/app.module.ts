import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//import {FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from "./home/welcome.component";
import {ProductModule} from "./products/product.module";

import {AppRoutingModule, routableComponents} from './app-routing.module';
import {CustomerListComponent} from "./customers/customer-list.component";
import {CustomerService} from "./customers/customer.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomerListComponent,
    routableComponents
  ],
  providers: [CustomerService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
