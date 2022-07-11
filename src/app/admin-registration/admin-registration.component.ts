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
  _id!: string;

  // constructor(private router: Router,
  //   private fb: FormBuilder,
  //   private route: ActivatedRoute,
  //   protected adminService: AdminRegisterService) {

  //   this.adminForm = this.fb.group({
  //     name: new FormControl('', [Validators.required]),
  //     email: new FormControl('', [Validators.required]),
  //     gender: new FormControl('', [Validators.required]),
  //     phone: new FormControl('', [Validators.required]),
  //     topic: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required])
  //   })
  // }



  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this._id = params['_id']
  //     console.log("route _id : " + this._id);
  //   });
  //   this.adminService.getAdminById(this._id).subscribe(
  //     (res: any) => (this.editProduct(res)),
  //     (err: any) => (console.log(err))
  //   )

  //   console.log("ID : " + this._id);
  //   // this._id = this.adminService.getAdminId
  //   // this.adminService.getAdminList(this._id).subscribe(
  //   //   (res:any)=>this.editAdmin(res),

  //   //   (err:any)=>console.log(err)
  //   // )

  // }

  // editProduct(Admin: admin) {
  //   console.log("Edit admin : " + JSON.stringify(Admin));
  //   this.adminForm.patchValue({
  //     name: Admin.name,
  //     email: Admin.email,
  //     gender: Admin.gender,
  //     phone: Admin.phone,
  //     topic: Admin.topic,
  //     password: Admin.password
  //   })
  //   console.log("Admin form: " + this.adminForm.value);
  // }

  // // public userData(form: FormGroup) {
  // //   console.log("submit form-Admin registration");
  // //   console.log(form.value);
  // //   if (!this._id) {

  // //     this.adminService.postAdmin(form.value).subscribe((data) => {
  // //       console.log("admin data" + data);
  // //     })
  // //     window.alert('Data saved successfully!');
  // //     this.router.navigate(['/admintable'])
  // //   }
  // //   else {
  // //     this.adminService.putAdmin(form.value).subscribe((res) => {
  // //       console.log("update event info");
  // //     })
  // //     alert("Details are Updated Successfully")
  // //   }
  // // }

  // public userdata(userForm: FormGroup) {
  //   console.log(userForm.value);

  //   this.adminService.putAdmin(userForm.value).subscribe((res) => {
  //     console.log(res);
  //   })
  //   this.router.navigate(['/admintable']);
  // }


  name!: string;
  email!: string;
  phone!: string;
  gender!: string;
  topic!: string;


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
      (err: any) => console.log("Error in Get ID" +err)
    )

  }
  editAdmin(selectAdmin: admin) {
    this.adminForm.patchValue({
      name: selectAdmin.name,
      email: selectAdmin.email,
      phone: selectAdmin.phone,
      gender: selectAdmin.gender,
      password: selectAdmin.password,
      topic: selectAdmin.topic,
    })
  }
  userdata(adminForm: FormGroup) {
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
