import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegisterService } from '../service/admin-register.service';
import { RoleServiceService } from '../service/role-service.service';
import { User } from '../service/user';
import { User1 } from '../service/user1';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  role: String = '';

  constructor(private router: Router,
    public user: AdminRegisterService,
    public roleservice: RoleServiceService,
    private http: HttpClient,
    public authService: AuthService) { }

  ngOnInit(): void {

  }
  // readonly baseURL = "http://localhost:8000/login/"



  public displayAdmin(loginForm: NgForm) {
    console.log(loginForm.value)
    this.authService.loginUser(loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token)

        console.log(res)
      },
      error => {
        console.log(error)
      }

    )
    this.router.navigate(['/adminrole']);
  }
  public displayUser(loginForm: NgForm) {
    console.log(loginForm.value)
    this.router.navigate(['/userrole']);
  }







  // public login(data: User) {
  //   return this.http.post(this.baseURL + 'login', data);
  // }

  
  public getToken() {
    return localStorage.getItem('token')
  }

  public logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this.router.navigate(['login'])
  }
}
