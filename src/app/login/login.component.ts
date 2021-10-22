import { Component, OnInit } from '@angular/core';
import { Classuser } from '../classuser';
import { Router } from '@angular/router';
import { UsersService } from '../users-service.service';
import { ProfileService } from '../profile-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checked = false;
  customer = new Classuser();
  login!: FormGroup;
  form: any;

  constructor(
    public createuser: UsersService,
    public profileService: ProfileService,
    private _router: Router,
    // public buttonname: string = 'LOGIN',
  ) { }


  ngOnInit(): void {
  }
  loginCustomer() {
    // if  {
    //  this.errormessage = true;
    //  this.spinner.hide();
      // this.buttonname = 'LOGIN'
    // } 
    // else {
      // this.login.controls['username'].disable();
      // this.login.controls['password'].disable();
      // this.buttonname = 'SIGNING IN'
      // this.clicked = true;
   
   

    this.createuser.loginCustomer(this.customer).subscribe((res: any) => {
      this.setUserToken(res);

      // this.login.controls['username'].disable();
      // this.login.controls['password'].disable();
    })
    //}
  }









  setUserToken(apiResponse: any) {
    localStorage.setItem('token', apiResponse.token)
    localStorage.setItem('userRefToken', apiResponse.data.id)
    localStorage.setItem('userToken', btoa(`${apiResponse.data.email}:password`))
    // this.createuser.loginCustomer(this.customer).subscribe(res => {
    // console.log("res...........",res);
    //this.customer=new Classuser;
    this.profileService.retrieveUserProfile().subscribe(res => {
      this.profileService.userData = res.data;
    })
    if (!!apiResponse.data.changePassword) {
      this._router.navigate([`changepassword`])
    }
    else {
      this._router.navigate([`${apiResponse.data.id}/Sidenav`])
    }

  }




}





