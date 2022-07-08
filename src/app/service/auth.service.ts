import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private registerUrl = "http://localhost:8000/api/register"
  private loginUrl = "http://localhost:8000/api/login"


  constructor(private http: HttpClient, private router: Router) { }


  public registerUser(user: User) {
    return this.http.post<any>(this.registerUrl, user)
  }
  public loginUser(user: User) {
    return this.http.post<any>(this.loginUrl, user);

  }
  public getToken() {
    return localStorage.getItem('token')
  }
  public logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }
  public loggedIn() {
    return !!localStorage.getItem('token');
  }
} 
