import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  role: String = '';
  readonly baseURL = "http://localhost:8000/login/"
  constructor(private http: HttpClient, private router: Router) { }

  
  public displayAdmin() {
    this.router.navigate(['/adminrole']);
  }

  public login(data: User) {
    return this.http.post(this.baseURL + 'login', data);
  }

  public loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public getToken() {
    return localStorage.getItem('token')
  }

  public logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this.router.navigate(['login'])
  }

}
