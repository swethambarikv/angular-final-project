import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdminRegisterService } from '../service/admin-register.service';
import { RoleServiceService } from '../service/role-service.service';
import { User1 } from '../service/user1';



@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
  providers: [AdminRegisterService]
})
export class AdminTableComponent implements OnInit {
  public _id: string = '';
  public name: any;
  public email: any;
  public gender: any;
  public phone: any;
  public practice: any;

  public admins: any = [];
  adminForm: FormGroup | any;

  visible!: boolean;
  constructor(protected adminService: AdminRegisterService, public roleService: RoleServiceService, private fb: FormBuilder) { }
  ngOnInit(): void {
    console.log("roleValue: " + this.roleService.roleValue);
    this.adminList();
  }
  public adminList() {
    this.adminService.getAdminList().subscribe((data) => {
      JSON.stringify(data)
      console.log("LIST : ", data)
      this.admins = data;
      if (data !== null) {
        this.visible = false;
      }
      else {
        this.visible = true;
      }

    })
  }
  public remove(_id: any) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adminService.deleteUserId(_id).subscribe((res) => {
        console.log(res);
        // this.refreshList();  
      });
    }
  }
  public refreshList() {
    this.adminService.getAdminList().subscribe((res) => {
      console.log("TABLE : "+res)
      this.adminService.admins = res as User1;
    })
  }
  public onEdit(_id: any) {
    this.adminService.setId = _id
    console.log(_id)
  }



  public resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.adminService.selectedAdmin = {
      _id: "",
      name: "",
      email: "",
      gender: "",
      phone: "",
      topic: "",
      password:"",
      role:""

    }
  }
}

