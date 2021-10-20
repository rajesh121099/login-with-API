import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    public createuser: UsersService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this.createuser.loggedIn()) {
      return true
    }
    else {
      this._router.navigate(['/Login'])
      return false
    }
  }

 
}
