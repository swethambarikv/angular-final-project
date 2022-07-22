import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { role } from '../role-table/role';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {
  public roleId!: any;
  public selectedRole!:role;
  public roles!:any;
  readonly baseUrl = "http://localhost:8000/roles"
  public roleValue:any='';
  constructor(private http: HttpClient) { }


  public  setRole(val: any) {
    this.roleValue = val
    console.log("IN SET ROLE : ", this.roleValue);
  }

  public  getRole() {
    console.log("In get Role : ", this.roleValue);
    
    return this.roleValue
  }

  // public set setRole(val : any){
  //   this.roleValue = val
  //   console.log("nn",this.roleValue); 
  // }
  // public get getRole() {
  //   console.log("mm",this.roleValue);
  //   return this.roleValue;
  // }


  public postRole(role: any) {
    console.log("Post role: " + Object.values(role));
    return this.http.post(this.baseUrl, Object.values(role))

  }
  public putRole(_id:string,role:any){
    console.log("Put role:"+Object.values(role))
    return this.http.put(this.baseUrl+`/${_id}`,Object.values(role))
  }
  public getAllRole() {
    console.log("GET ALL ROLES");
    return this.http.get(this.baseUrl);
  }
  public getRoleId(_id: string) {
    return this.http.get(this.baseUrl + `/${_id}`);
  }

  public deleteRole(_id:string){
    console.log(_id)
    return this.http.delete(this.baseUrl + `/${_id}`);

  }
  public set setId(_id: string) {
    this.roleId = _id;
    console.log(this.roleId);
    
  }
  public get getId() {
    console.log(this.roleId);
    
    return this.roleId;
  }
  public getRoleDrop(){
    return this.http.get(this.baseUrl);
  }
}
