import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { User2} from './user2'
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }
  public _id!: User2;
  public name!: User2;
  public email!: User2;
  public mobile!: User2;
  public topic!: User2;
  public gender!: User2;
  public role!: User2;
  public username!: User;
  public password!: User;
  public user!: any;

  public userId: any;
  readonly baseUrl = "http://localhost:8000/users/";
  public selectedUser!: User2;

  public users!: any;
  public userToEdit() {
    return this.selectedUser._id;
  }

  public getUserList() {
    return this.http.get<User2>(this.baseUrl);
  }
  public getUserById(_id: string) {
    return this.http.get<any>(this.baseUrl + `${_id}`);
  }
  public postUser(user: User2) {
    console.log('posted')
    console.log(user);

    return this.http.post(this.baseUrl, user);
  }
  public putUser(user: User2) {
    console.log("User");
    return this.http.put(this.baseUrl + 'update/' + `${user._id}`, user, { responseType: 'text' });
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

  public updateUser(form: User2, _id: string) {
    return this.http.put(this.baseUrl + `/${_id}`, form)
  }

}
