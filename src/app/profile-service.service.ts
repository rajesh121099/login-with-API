import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classuser } from './classuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getCountryList() {
  throw new Error('Method not implemented.');
  }

  userData = new Classuser();

  constructor(private http: HttpClient) { }

  retrieveUserProfile() {
    return this.http.get<any>(`${environment.userManagement}/retrieveUser`)
  }

  updateSUrlIntegration(integration: string) {
  return this.http.post<any>(`${environment.userManagement}/updateSUrlDomain`, { integration })
}
}
