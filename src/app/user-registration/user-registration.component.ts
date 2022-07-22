import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegisterService } from '../service/admin-register.service';
import { UserService } from '../service/user.service';
import { User1 } from '../service/user1';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  public topics = ['Angular', 'React', 'php', 'Python', 'Pearl', '.Net', 'EBA', 'Oracle', 'BFS'];
  _id!: string;
  userForm: FormGroup | any;
  constructor(public userService: UserService,
    private router: Router,
    private route: ActivatedRoute
    , private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      topic: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('user', [])
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id'];
      console.log("User ID: " + this._id);
    });
    if (this._id != null) {
      this.userService.getUserById(this._id).subscribe(
        (res: any) => {
          console.log("RESPONSE:" + res);
          this.editUser(res)
        },
        (err: any) => console.log("Error in edit user: " + JSON.stringify(err))
      )
    }
  }
  public editUser(selectUser: User1) {
    console.log("EDIT USER: " + selectUser)
    this.userForm.patchValue({
      name: selectUser.name,
      email: selectUser.email,
      phone: selectUser.phone,
      gender: selectUser.gender,
      topic: selectUser.topic
    })
  }
  public userdata(userForm: FormGroup) {
    console.log(this._id);
    this.userForm.role = "user"
    console.log(userForm.value)
    if (!this._id) {
      this.userService.postUser(userForm.value).subscribe((res) => {
        console.log("post user: " + res);
        alert("User added!")
      })
    }
    else {
      this.userService.putUser(this._id, userForm.value).subscribe((res) => {
        console.log("PUT user: " + res);
        alert("Update user!")
      })
    }
  }

}
