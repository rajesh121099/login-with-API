import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Classuser } from './classuser';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  userData: Classuser  = new Classuser ();
  public baseURL:string = "https://e9a45i8ip3.execute-api.ap-south-1.amazonaws.com/Dev/user/";
  
 

  constructor( private http: HttpClient, private _router: Router) { }
  addCustomer(customer:Classuser):Observable<Classuser>{
    const body=JSON.stringify(customer);
    console.log(body)
    return this.http.post<Classuser>(this.baseURL+'createUser',body)
  }
  forgetCustomer(customers:Classuser):Observable<Classuser>{
    const body=JSON.stringify(customers); // we also use like loginCustomer
    console.log(body)
    return this.http.post<Classuser>(this.baseURL+'forgotPassword',body)
  }
  
  loginCustomer(customer:Classuser):Observable<Classuser>{
    console.log(customer)
    return this.http.post<Classuser>(this.baseURL+'authenticateUser',customer)
  }

  //changeCustomer(customer:Classuser):Observable<Classuser>{
   // console.log(customer)
   /// return this.http.post<Classuser>(this.baseURL+'changePassword',customer)
 // }
 changePassword(user: any){
  return this.http.post<any>(`${environment.userManagement}/changePassword `, user)
}
  loggedIn() {
    return !!(localStorage.getItem('token') && localStorage.getItem('userToken'))
  }
  getToken() {
    return localStorage.getItem('token')
  }
  getUserToken() {
    return localStorage.getItem('userToken')
  }

  removeUserToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('userToken');
   // this.socialAuthService.signOut();
  }

  logoutUser() {
    this.removeUserToken();
    this._router.navigate(['/message'])
  }
}
