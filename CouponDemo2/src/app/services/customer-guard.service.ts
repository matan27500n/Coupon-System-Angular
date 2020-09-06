import { LoginService } from './login.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerGuardService implements CanActivate {
  public constructor(
    private loginService: LoginService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.loginService.type === 'customer') {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
