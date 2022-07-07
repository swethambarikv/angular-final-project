import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AdminRegisterService } from '../service/admin-register.service';
import { RoleServiceService } from '../service/role-service.service';
import { User } from '../service/user';
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
  adminForm:FormGroup|any;

  visible!: boolean;
  constructor(protected adminService: AdminRegisterService, public roleService: RoleServiceService) { }
  ngOnInit(): void {
    // this.onEdit(this._id);
    console.log("roleValue: "+this.roleService.roleValue);
    
    this.adminList();
  }
  public adminList() {
    this.adminService.getAdminList().subscribe((data) => {
      // console.log("Data" + data)
      JSON.stringify(data)
      this.admins = data;
      if (data !== null) {
        this.visible = false;
      }
      else {
        this.visible = true;
      }

    })
  }
  // public onEdit(id: any) {
  //   this.adminService.getAdminList();
  //   console.log(this.adminService.getAdminId);
  //   this.adminService.getThatId(id).subscribe(
  //     (res: any) => this.editAdmin(res),
  //     (err: any) => console.log(err)
  //   )
  // }
  public remove(_id: any) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adminService.deleteUserId(_id).subscribe((res) => {
        console.log(res);  
      });
      // this.featureService.getList().subscribe((res)=>{
      //   this.featuresList=res as Features[]
      //   console.log(JSON.stringify(res));
      // });
    }

  }
  editAdmin(admin: User1) {
    this.adminForm.patchValue({
       _id: admin._id,
       name:admin.name,
       email: admin.email,
       gender:admin.gender,
       phone: admin.phone,
       topic:admin.topic
    
    })
  }
}

