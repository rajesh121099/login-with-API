import { Component, OnInit } from '@angular/core';
import { Classuser } from '../classuser';
import { Router } from '@angular/router';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checked = false;
  customer = new Classuser();
  constructor(
    public createuser:UsersService,
    private _router: Router
    ) { }
  

  ngOnInit(): void {
  }
 
  logincustomer() {
 
    this.createuser.loginCustomer(this.customer).subscribe(res => {

      // console.log("res...........",res);
     this.customer=new Classuser;
     
     if (res.data.changePassword) {
       this._router.navigate([`changepassword`])
    } 
    else {
      this._router.navigate([`Sidenav`])
    }
  })
  }
 }
 
 
 
 

