import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
    getCustomers = () => [
        { id: 1, name: 'John Paul'},
        { id: 2, name: 'Ian wright'},
        { id: 3, name: 'David Seaman'}
    ];
}
