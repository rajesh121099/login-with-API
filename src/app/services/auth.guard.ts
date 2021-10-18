import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  UsersService: any;
  constructor(
  public createuser:UsersService,
  private _router: Router) { }
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Promise<boolean> {
    var isAuthenticated = this.UsersService.getAuthStatus();
    if (!isAuthenticated) {
        this._router.navigate(['/Login']);
    }
    return isAuthenticated;
}
   
}
