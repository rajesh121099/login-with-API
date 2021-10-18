import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Classuser } from './classuser';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public baseURL:string = "https://e9a45i8ip3.execute-api.ap-south-1.amazonaws.com/Dev/user/";
 

  constructor( private http: HttpClient) { }
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

  changeCustomer(customer:Classuser):Observable<Classuser>{
    console.log(customer)
    return this.http.post<Classuser>(this.baseURL+'changePassword',customer)
  }
}
