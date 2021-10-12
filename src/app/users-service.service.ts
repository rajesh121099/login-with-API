import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Classuser } from './classuser';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  baseURL:string = " https://e9a45i8ip3.execute-api.ap-south-1.amazonaws.com/Dev/user/";
  constructor( private http: HttpClient) { }
  addCustomer(customer:Classuser):Observable<Classuser>{
    const body=JSON.stringify(customer);
    console.log(body)
    return this.http.post<Classuser>(this.baseURL+'createUser',body)
  }

}
