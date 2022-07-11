import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegisterService } from '../service/admin-register.service';
import { admin } from '../admin-registration/admin'
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent implements OnInit {

  public topics = ['Angular', 'React', 'php', 'Python', 'Pearl', '.Net', 'EBA', 'Oracle', 'BFS'];
  adminForm: FormGroup | any;
  public _id!: string;
  public name!: string;
  public email!: string;
  public phone!: string;
  public gender!: string;
  public topic!: string;


  constructor(private adminService: AdminRegisterService,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.adminForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      topic: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id']
      console.log("route _id : " + this._id);
    });
    this.adminService.getAdminId(this._id).subscribe(
      (res: any) => this.editAdmin(res),
      (err: any) => console.log("Error in Get ID" + err)
    )

  }
  public editAdmin(selectAdmin: admin) {
    this.adminForm.patchValue({
      name: selectAdmin.name,
      email: selectAdmin.email,
      phone: selectAdmin.phone,
      gender: selectAdmin.gender,
      password: selectAdmin.password,
      topic: selectAdmin.topic,
    })
  }
  public userdata(adminForm: FormGroup) {
    console.log("Submit data: " + adminForm.value);
    if (!this._id) {
      this.adminService.postAdmin(adminForm.value).subscribe((res) => {
        console.log("post: " + res)
        alert("Added successfully!!")
      })
    }
    else {
      this.adminService.putAdmin(this._id, adminForm.value).subscribe((res) => {
        console.log("update: " + res)
        alert("Updated successfully!!")
      })
    }
  }
}
