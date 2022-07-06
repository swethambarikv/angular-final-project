import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { User1 } from './user1';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  _id!: User1;
  name!: User1;
  email!: User1;
  mobile!: User1;
  topic!: User1;
  gender!: User1;

  readonly baseUrl = "http://localhost:8000/user/";
  selectedUser!:User1;
  users!:any[];

  public userToEdit(){
    return this.selectedUser._id;
  }
  public getUser(){
    return this.http.get<User1>(this.baseUrl);
  }
  public getUserById(_id:string){
    return this.http.get<any>(this.baseUrl+`${_id}`);
  }
  public postUser(user:User1){
    console.log('posted user');
    return this.http.post(this.baseUrl,user);
  }
  public putUser(user:User1){
    console.log("User");
    return this.http.put(this.baseUrl+'update/'+`$${user._id}`,user,{responseType:'text'});
  }
  public deleteUser(_id:string){
    return this.http.delete(this.baseUrl+'delete/'+`${_id}`,{responseType:'text'})
  }
}
