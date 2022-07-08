import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminRegisterService } from '../service/admin-register.service';
import { User1 } from '../service/user1';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent implements OnInit {

  public topics = ['Angular', 'React', 'php', 'Python', 'Pearl', '.Net', 'EBA', 'Oracle', 'BFS'];

  adminList: User1[] = [];
  userModel!: User1[];
  adminForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute, protected adminService: AdminRegisterService) {
    this.adminForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      practice: new FormControl('', [Validators.required]),
    })
  }

  _id: string = '';

  ngOnInit(): void {
    // console.log(this.adminService.topic);
    this._id = this.adminService.setId
    this.adminService.getAdminById(this._id).subscribe((res) =>
      (res: any) => (this.editProduct(res))
    )
    this.route.params.subscribe(params => {
      this._id = params['_id']
      console.log("route _id : " + this._id);
    });
    // this._id = this.adminService.getAdminId
    // this.adminService.getAdminList(this._id).subscribe(
    //   (res:any)=>this.editAdmin(res),

    //   (err:any)=>console.log(err)
    // )

  }
  editProduct(product: User1) {

    this.adminForm.patchValue({
      name: product.name,
      email: product.email,
      gender: product.gender,
      phone: product.phone,
      practice: product.topic
    })
  }

  public userData(form: NgForm) {
    console.log("submit form-Admin registration");
    console.log(form.value);
    if (!this._id) {

      this.adminService.postAdmin(form.value).subscribe((data) => {
        console.log("admin data" + data);
      })
      window.alert('Data saved successfully!');
      this.router.navigate(['/admintable'])
    }
    else {
      this.adminService.putAdmin(form.value).subscribe((res) => {
        console.log("update event info");
      })
      alert("Details are Updated Successfully")
    }
  }

  public userdata(userForm: NgForm) {
    console.log(userForm.value);

    this.adminService.postAdmin(userForm.value).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(['/admintable']);
  }
}
