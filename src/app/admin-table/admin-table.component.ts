import { Component, OnInit } from '@angular/core';
import { AdminRegisterService } from '../service/admin-register.service';
import { RoleServiceService } from '../service/role-service.service';
import { User } from '../service/user';



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

  visible!: boolean;
  constructor(protected adminService: AdminRegisterService, public roleService: RoleServiceService) { }
  ngOnInit(): void {
    this.onEdit(this._id);
    this.adminList();
  }
  public adminList() {
    this.adminService.getAdmin().subscribe((data) => {
      console.log("Data" + data)
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
  public onEdit(id: any) {

  }
  public remove(_id: any) {

  }
}

