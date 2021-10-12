import { Component, OnInit } from '@angular/core';
import { Classuser } from '../classuser';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  checked = false;
    
  customer = new Classuser();
  constructor(public createuser:UsersService) { }


  ngOnInit(): void {
  }
  insertcustomer() {
   
    this.createuser.addCustomer(this.customer).subscribe(res => {
     
     this.customer=new Classuser;
    })
  }
}
