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
  constructor(public userService: UserService, public roleservice: RoleServiceService) { }
  visible: boolean = false;
  roleDrop: any = [];
  ngOnInit(): void {
    this.roleservice.getRoleDrop().subscribe((res) => {
           this.roleDrop = Object.values(res)[0];


    })
  }
  public registerUser(registerForm: NgForm) {
    this.userService.postUser(registerForm.value).subscribe(
      res => {
        console.log(res)
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
