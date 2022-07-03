import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'admin',component:AdminRegistrationComponent},
  {path:'admintable',component:AdminTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
