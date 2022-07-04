import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRegisterService } from '../service/admin-register.service';
import { User } from '../service/user1';


@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent implements OnInit {

  public topics = ['Angular', 'React', 'php', 'Python', 'Pearl', '.Net', 'EBA', 'Oracle', 'BFS'];

  adminList: User[] = [];
  // userModel:User[]=[];
  constructor(private router: Router, protected adminService: AdminRegisterService) { }

  ngOnInit(): void {
    console.log(this.adminService.topic)
  }


  public OnSubmit(form: NgForm) {
    console.log("submit form-Admin registration");
    this.adminService.postAdmin(form.value).subscribe((data) => {
      // this.adminService.admins=data;
      console.log("admin data" + data);
    })
    window.alert('Data saved successfully!');
    this.router.navigate(['/admintable'])
    this.refreshList();

  }
  public refreshList() {
    this.adminService.getAdmin().subscribe((data) => {
      this.adminService.admins = data;
      console.log("refresh" + data);

    })
  }

}
