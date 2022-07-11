import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleServiceService } from '../service/role-service.service';
import { UserService } from '../service/user.service';
import { User1 } from '../service/user1';
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
  constructor(public roleService: RoleServiceService, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    // this.userService.getUser().subscribe((res)=>{
    //   console.log(res);
    //   this.users = res
    // })

    // console.log(this.userForm)
    this.userList();
  }

  public userList() {
    this.userService.getUserList().subscribe((data) => {
      JSON.stringify(data);
      this.users = data;
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
    // this.router.navigate['/updateUser']
  }

  public remove(_id: any) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(_id).subscribe((res) => {
        console.log(res);
        // this.refreshList();  
      });
    }
  }
}
