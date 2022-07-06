import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './service/auth.guard';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'admin',component:AdminRegistrationComponent},
  {path:'admintable',component:AdminTableComponent},
  {path:'user',component:UserComponent},
  {path:'usertable',component:UserRegistrationComponent},
  {path:'adminrole',component:AdminComponent,},
  {path:'userrole',component:UserComponent},
  {path:'login',component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
