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
import { UserTableComponent } from './user-table/user-table.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RoleTableComponent } from './role-table/role-table.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'admin',component:AdminRegistrationComponent,canActivate:[AuthGuard]},
  {path:'update/:_id',component:AdminRegistrationComponent,canActivate:[AuthGuard]},
  {path:'admintable',component:AdminTableComponent,canActivate:[AuthGuard]},
  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'updateUser/:_id',component:UserRegistrationComponent,canActivate:[AuthGuard]},
  {path:'add-user',component:UserRegistrationComponent,canActivate:[AuthGuard]},
  {path:'usertable',component:UserTableComponent,canActivate:[AuthGuard]},
  {path:'adminrole',component:AdminComponent,canActivate:[AuthGuard]},
  {path:'userrole',component:UserComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactComponent  },
  {path:'role-table',component:RoleTableComponent},
  {path:'update/:_id',component:RoleTableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
