import { Component, OnInit } from '@angular/core';
import { AdminRegisterService } from '../service/admin-register.service';
import { User } from '../service/user1';



@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
  providers:[AdminRegisterService]
})
export class AdminTableComponent implements OnInit {
  //admins:User[]=[];
  visible!:boolean;
  constructor(protected adminService:AdminRegisterService) { }
  ngOnInit(): void {
    console.log(this.adminService.admins);
    this.adminList();

  }

  adminList(){
    this.adminService.getAdmin().subscribe((data)=>{
      console.log(data)
      this.adminService.admins=data as User[];
      console.log(this.adminService.admins);
      
      if(data!=0){
        this.visible=false;
      }
      else{
        this.visible=true;
      }
    })
  }
}

