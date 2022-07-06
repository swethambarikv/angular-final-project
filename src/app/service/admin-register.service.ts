import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { User1 } from './user1';
@Injectable({
  providedIn: 'root'
})
export class AdminRegisterService {

  constructor(private http: HttpClient) { }
  _id!: User1;
  name!: User1;
  email!: User1;
  mobile!: User1;
  topic!: User1;
  gender!: User1;

  username!: User;
  password!: User;
  user!: any;

  readonly baseUrl = "http://localhost:8000/admin/";
  selectedAdmin!: User1;

  admins!: any;

  public adminToEdit() {
    return this.selectedAdmin._id;
  }

  public getAdmin() {
    return this.http.get<User1>(this.baseUrl);
  }
  public getAdminById(_id: string) {
    return this.http.get<any>(this.baseUrl + `${_id}`);
  }
  public postAdmin(admin: User1) {
    console.log('posted')
    return this.http.post(this.baseUrl, admin);
  }
  public putAdmin(admin: User1) {
    console.log("Admin");
    return this.http.put(this.baseUrl + 'update/' + `${admin._id}`, admin, { responseType: 'text' });
  }
  public deleteAdmin(_id: string) {
    return this.http.delete(this.baseUrl + 'delete/' + `${_id}`, { responseType: 'text' })
  }

}
