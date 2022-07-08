import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRegisterService } from '../service/admin-register.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  public topics = ['Angular', 'React', 'php', 'Python', 'Pearl', '.Net', 'EBA', 'Oracle', 'BFS'];

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  public userdata(userForm: NgForm) {
    console.log(userForm.value.name);

    this.userService.postUser(userForm.value).subscribe((res) => {
      console.log(JSON.stringify(res));

    });
    this.router.navigate(['/usertable']);
  }

}
