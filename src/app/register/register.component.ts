import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(public userService:UserService,private authService:AuthService) { }

  ngOnInit(): void {
  }
  registerUser(registerForm: NgForm) {
    console.log(registerForm.value);
    this.authService.registerUser(registerForm.value).subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        console.log(res)
      },
      err=>{
        console.log(err)
      }

    )
  }
}
