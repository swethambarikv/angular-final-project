import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { User1} from './user1'
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

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

  public userId: any;
  readonly baseUrl = "http://localhost:8000/users/";
  public selectedUser!: User1;

  public users!: any;
  constructor(private http: HttpClient) { }

  public userToEdit() {
    return this.selectedUser._id;
  }

  public getUserList() {
    return this.http.get<User1>(this.baseUrl);
  }
  public getUserById(_id: string) {
    return this.http.get<any>(this.baseUrl + `${_id}`);
  }
  public postUser(user: User1) {
    console.log('posted')
    console.log(user);

    return this.http.post(this.baseUrl, user);
  }
  public putUser(user: User1) {
    return this.http.put(this.baseUrl + `${user._id}`, user, { responseType: 'text' });
  }
  public deleteUser(_id: string) {
    return this.http.delete(this.baseUrl + 'delete/' + `${_id}`, { responseType: 'text' })
  }
  
  public getThatId(id: any) {
    return this.http.get(this.baseUrl + `/${id}`)
  }
  public deleteUserId(_id: string) {
    console.log("delete" + _id);

    return this.http.delete(this.baseUrl + `/${_id}`);
  }

  public updateUser(form: User1, _id: string) {
    return this.http.put(this.baseUrl + `/${_id}`, form)
  }

}
