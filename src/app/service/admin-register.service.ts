import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { User1 } from './user1';
@Injectable({
  providedIn: 'root'
})
export class AdminRegisterService {

  constructor(private http: HttpClient) { }
  public _id!: User1;
  public name!: User1;
  public email!: User1;
  public mobile!: User1;
  public topic!: User1;
  public gender!: User1;
  public role!: User1;
  public username!: User;
  public password!: User;
  public adminId!:string;
  readonly baseUrl = "http://localhost:8000/users/";
  readonly AdminbaseUrl = "http://localhost:8000/admin";
  public selectedAdmin!: User1;
  public admins!: any;

  adminValue: any;
  public postAdmin(admin: User1) {
    const { name,email,password,gender,phone,topic } = admin
    console.log("Destructured value : "+name+" password : "+ password);
    return this.http.post(this.baseUrl+`/register`, {name: name, email: email, password: password, gender:gender, phone:phone, topic: topic, role: "admin" });
  }
  public getAdminId(_id:string ) {
    return this.http.get(this.baseUrl + `/${_id}`)
  }
  public getAdminList() {
    return this.http.get<User1>(this.baseUrl);
  }
  public adminToEdit() {
    return this.selectedAdmin._id;
  }
  public getAdminById(_id: string) {
    return this.http.get<any>(this.baseUrl + `/${_id}`);
  }
  public putAdmin(_id:string,adminForm:NgForm) {
    return this.http.put(this.baseUrl +`/${_id}`,adminForm);
  }
  public deleteAdmin(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`, { responseType: 'text' })
  }
  public get getThatId() {
    return this.adminId;
  }
  public deleteUserId(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`);
  }
  public updateAdmin(form: User1, _id: string) { 
    return this.http.put(this.baseUrl + `/${_id}`, form)
  }
  public set setId(_id:string){
    this.adminId=_id;
  }
  public get getId(){
    return this.adminId;
  }
}
