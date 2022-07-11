import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { User1 } from './user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  _id!: User1;
  name!: User1;
  email!: User1;
  phone!: User1;
  topic!: User1;
  gender!: User1;
  password!: User;

  selectedUser!: User1;
  users!: any[];
  public userId!: string;


  readonly baseUrl = "http://localhost:8000/users";

  public getUserList() {
    return this.http.get<User1>(this.baseUrl);
  }
  public getUserById(_id: string) {
    return this.http.get<any>(this.baseUrl + `/${_id}`);
  }
  public postUser(user: User1) {
    console.log(user);
    return this.http.post(this.baseUrl, user);
  }
  public putUser(_id: string, userForm: NgForm) {

    console.log("PUT user: " + _id + " " + JSON.stringify(userForm));
    return this.http.put(this.baseUrl + `/${_id}`, userForm)
  }
  public deleteUser(_id: string) {
    return this.http.delete(this.baseUrl + `/${_id}`, { responseType: 'text' })
  }
  set setId(_id: string) {
    this.userId = _id;
  }
  get getId() {
    return this.userId;
  }
}
