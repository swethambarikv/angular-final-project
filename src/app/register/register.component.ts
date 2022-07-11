import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { RoleServiceService } from '../service/role-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public topics = ['Angular', 'React', 'php', 'Python', 'Pearl', '.Net', 'EBA', 'Oracle', 'BFS'];
  constructor(public userService: UserService, private authService: AuthService, public roleservice: RoleServiceService) { }
  visible: boolean = false;
  ngOnInit(): void {
  }
  public registerUser(registerForm: NgForm) {
    console.log(registerForm.value);
    this.authService.registerUser(registerForm.value).subscribe(
      res => {
        console.log(res)

        // localStorage.setItem('token', res.token)
        // console.log(res)
      },
      err => {
        console.log(err)
      }
    )

  }
  public checkpass(e: Event) {
    if (this.userService.password == this.userService.cPassword) {
      this.visible = false;
    }
    else {
      this.visible = true;
    }
  }

}
