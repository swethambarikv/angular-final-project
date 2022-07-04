import { Component, OnInit } from '@angular/core';
import { AdminRegisterService } from '../service/admin-register.service';
import { User } from '../service/user1';



@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
  providers: [AdminRegisterService]
})
export class AdminTableComponent implements OnInit {
  admins: any = [];

  visible!: boolean;
  constructor(protected adminService: AdminRegisterService) { }
  ngOnInit(): void {

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
}

