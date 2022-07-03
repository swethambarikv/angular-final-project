import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
// import { AddAdminComponent } from './add-admin/add-admin.component';
// import { AddUserComponent } from './add-user/add-user.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import{HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    // AddAdminComponent,
    // AddUserComponent,
    AdminRegistrationComponent,
    UserRegistrationComponent,
    AdminTableComponent,
    UserTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
