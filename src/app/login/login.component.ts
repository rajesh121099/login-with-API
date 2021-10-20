import { Component, OnInit } from '@angular/core';
import { Classuser } from '../classuser';
import { Router } from '@angular/router';
import { UsersService } from '../users-service.service';
import { ProfileService } from '../profile-service.service';

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
    public profileService: ProfileService,
    private _router: Router
    ) { }
  

  ngOnInit(): void {
  }
  loginCustomer(){
    this.createuser.loginCustomer(this.customer).subscribe((res: any)=>{
      this.setUserToken(res);
    })
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
 
 
 
 

