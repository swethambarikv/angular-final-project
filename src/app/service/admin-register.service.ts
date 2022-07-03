import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user1';

@Injectable({
  providedIn: 'root'
})
export class AdminRegisterService {

  constructor(private http: HttpClient) { }
  _id!: User;
  name!: User;
  email!: User;
  mobile!: User;
  topic!: User;
  gender!: User;
  readonly baseUrl = "http://localhost:8000/admin/";
  selectedAdmin!: User;

  admins: User[]=[]
  
  adminToEdit() {
    return this.selectedAdmin._id;
  }

  getAdmin() {
    //console.log(typeof(this.admins))
    return this.http.get(this.baseUrl);
  }
  getAdminById(_id: string) {
    return this.http.get<any>(this.baseUrl + `${_id}`);
  }
  postAdmin(admin: User) {
    console.log('posted')
    return this.http.post(this.baseUrl,admin);
  }
  putAdmin(admin: User) {
    console.log("Admin");
    return this.http.put(this.baseUrl + 'update/' + `${admin._id}`, admin, { responseType: 'text' });
  }
  deleteAdmin(_id: string) {
    return this.http.delete(this.baseUrl + 'delete/' + `${_id}`, { responseType: 'text' })
  }

}
