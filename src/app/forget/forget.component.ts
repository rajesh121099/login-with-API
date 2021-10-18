import { Component, OnInit } from '@angular/core';
import { Classuser } from '../classuser';
import { UsersService } from '../users-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  customers = new Classuser();
constructor(public createuser:UsersService ,  private _router: Router) { }

  ngOnInit(): void {
  }
  forcustomer() {
 
    this.createuser.forgetCustomer(this.customers).subscribe(res => {
      this._router.navigate([`Login`])
     this.customers=new Classuser;
    })
  }
}
