import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleServiceService } from '../service/role-service.service';
import { UserService } from '../service/user.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  public users: any = [];
  _id: string = '';
  userForm: FormGroup | any;
  visible!: boolean;
  id: any;
  token: any
  roleId: any;
  userRole: any = ''
  roleValue: any = '';

  constructor(public roleService: RoleServiceService, private userService: UserService, private router: Router, private roleservice: RoleServiceService) { }

  ngOnInit() {

    if (localStorage.getItem('token')) {
      this.token = jwtDecode(localStorage.getItem('token') || "")
      console.log("User Id : ", this.token)
      this.id = this.token.id
      console.log(this.id)
    }

    this.userService.getUserById(this.id).subscribe(res => {
      console.log(res)
      this.roleId = res.role
      this.userService.getUserRole(this.roleId).subscribe(res => {
        this.roleValue = res.roleType
      })
    })
    this.userList();
  }

  public userList() {
    this.userService.getUserList().subscribe((data) => {
      JSON.stringify(data);
      this.users = data;
      console.log("IN USER TABLE : ", data)
      if (data != null) {
        this.visible = false;
      }
      else {
        this.visible = true;
      }
    })
  }
  public onEdit(_id: any) {
    this.userService.setId = _id
    console.log(_id);
  }

  public remove(_id: any) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(_id).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
