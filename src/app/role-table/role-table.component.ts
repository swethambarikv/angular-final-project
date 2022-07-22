import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleServiceService } from '../service/role-service.service';
import { role } from './role';
@Component({
  selector: 'app-role-table',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss']
})
export class RoleTableComponent implements OnInit {

  constructor(public roleService: RoleServiceService, private router: Router, private route: ActivatedRoute) { }
  public role: any;
  public roles: any;
  public roleValue = []
  roleForm: FormGroup | any;
  public _id!: string
  rolesArray:any=[];
  ngOnInit(): void {
    this.roleService.getAllRole().subscribe((res) => {
      let data = JSON.stringify(res)
      console.log("Role : " + data);
      console.log(res.valueOf());
      this.roles = res; 
      console.log(this.roles['role'][0].roleType);
      
      for( let i of this.roles['role']){
        this.roleValue = i['roleType']
        console.log("Roles:",i['roleType']);
      this.rolesArray.push(i['roleType']);
               }      
    })
    console.log(this.rolesArray)
  }
  public onSubmit(roleForm: NgForm) {
    console.log(roleForm.value)
    this.role=roleForm.value.role
    console.log(this.role);
    console.log(this.roleService.getId);
    if(!this.roleService.getId)
    {
    this.roleService.postRole(roleForm.value).subscribe((res) => {
      console.log(res);
      alert("Role added!");
    })
  }
  else{
    this.roleService.putRole(this.roleService.getId,roleForm.value).subscribe((res)=>{
      alert("Role updated!")
    })
  }
}
  public onEdit(u: role) {
    
    console.log(u.roleType);
    this.role=u.roleType;
    console.log(u._id)
    this.roleService.selectedRole=this.role;
    this.roleService.setId=u._id
    
  }
  public remove(_id: string) {
    console.log("Remove role id: "+_id)
    if (confirm('Are you sure to delete this record ?') == true) {

      this.roleService.deleteRole(_id).subscribe((res) => {
        
      alert(Object.values(res)[0])
      
      });
      
      }
  }
}
