import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) { }
  canActivate(): boolean {

    if (this.loginService.loggedIn()) {

      return true;

    }

    else {

      window.alert("Login to continue!");

      this.router.navigate(['/login']);

      return false;

    }

  }
}
