import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Classuser } from '../classuser';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  checked = false;
  changePassword: FormGroup;
  cust = new Classuser();

  constructor(public createuser:UsersService,  private router: Router,) { 
    this.changePassword = new FormGroup({
      email: new FormControl('', Validators.required,),
      oldPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }


  ngOnInit(): void {
  }
  changeCustomer() {
  
    this.createuser. changeCustomer(this.cust).subscribe(res => {
      this.router.navigate(['/Login'])
    
    })
}
}