import { Component } from '@angular/core';
import { CustomerService } from './customer.service';
@Component({
    selector: 'customers',
    templateUrl: 'app/customers/customer-list.component.html'
})

export class CustomerListComponent {
    public pageTitle: string = 'customer list';
    customers = this.customerService.getCustomers();

    constructor(private customerService: CustomerService){}
}
