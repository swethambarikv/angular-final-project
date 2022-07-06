import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../service/role-service.service';
import { User1 } from '../service/user1';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor(public roleService: RoleServiceService) { }
  users: any = [];
  ngOnInit(): void {
  }
  public onEdit(_id: String) {

  }


}
