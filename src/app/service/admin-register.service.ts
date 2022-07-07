import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  public user!: any;

  public adminId: any;
  readonly baseUrl = "http://localhost:8000/admin/";
  public selectedAdmin!: User1;

  public admins!: any;

  public adminToEdit() {
    return this.selectedAdmin._id;
  }

  public getAdminList() {
    return this.http.get<User1>(this.baseUrl);
  }
  public getAdminById(_id: string) {
    return this.http.get<any>(this.baseUrl + `${_id}`);
  }
  public postAdmin(admin: User1) {
    console.log('posted')
    console.log(admin);

    return this.http.post(this.baseUrl, admin);
  }
  public putAdmin(admin: User1) {
    console.log("Admin");
    return this.http.put(this.baseUrl + 'update/' + `${admin._id}`, admin, { responseType: 'text' });
  }
  public deleteAdmin(_id: string) {
    return this.http.delete(this.baseUrl + 'delete/' + `${_id}`, { responseType: 'text' })
  }
  // get getAdminId() {
  //   return this.adminId;
  // }
  public getThatId(id: any) {
    return this.http.get(this.baseUrl + `/${id}`)
  }
  public deleteUserId(_id: string) {
    console.log("delete" + _id);

    return this.http.delete(this.baseUrl + `/${_id}`);
  }

  public updateAdmin(form: User1, _id: string) {
    return this.http.put(this.baseUrl + `/${_id}`, form)
  }
}
