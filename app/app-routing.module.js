"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_list_component_1 = require("./products/product-list.component");
var customer_list_component_1 = require("./customers/customer-list.component");
var page_not_found_component_1 = require("./shared/page-not-found.component");
var welcome_component_1 = require("./home/welcome.component");
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'welcome' },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'customers', component: customer_list_component_1.CustomerListComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '**', pathMatch: 'full', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routableComponents = [
    product_list_component_1.ProductListComponent,
    customer_list_component_1.CustomerListComponent,
    page_not_found_component_1.PageNotFoundComponent,
    welcome_component_1.WelcomeComponent
];
//# sourceMappingURL=app-routing.module.js.map