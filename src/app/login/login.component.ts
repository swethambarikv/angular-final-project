import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegisterService } from '../service/admin-register.service';
import { RoleServiceService } from '../service/role-service.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';

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
    public authService: AuthService,
    public userService:UserService) { }
  roleName: string | null = '';
  ngOnInit(): void {

  }
  public displayAdmin(loginForm: NgForm) {
    this.roleName = loginForm.value.role;
    this.userService.getRole(this.roleName);
    this.authService.loginUser(loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token)
      },
      error => {
        console.log(error)
      }

      

    )
    this.router.navigate(['/adminrole']);
  }
  public displayUser(loginForm: NgForm) {
    this.authService.loginUser(loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token)
            },
      error => {
        console.log("Display user error: " + error)
      }
    )
    this.router.navigate(['/userrole']);
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
