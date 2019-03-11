import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
 
customers:any=[{ id: 11, name: 'Mr. Nice',email:'nick@email.com', mobile:'23124235',address:'silk board bilwara' },
{ id: 12, name: 'Narco',email:'narco@email.com', mobile:'23124235',address:'silk board bilwara' }];

  getCustomers(){
    return this.customers;
  }
}
