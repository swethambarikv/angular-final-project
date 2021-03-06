import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UserService } from './service/user.service';
import { AdminRegisterService } from './service/admin-register.service';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './service/auth.service';
import { TokeninterceptorService } from './service/tokeninterceptor.service'
import { AboutUsComponent } from './about-us/about-us.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { RoleTableComponent } from './role-table/role-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    AdminRegistrationComponent,
    UserRegistrationComponent,
    AdminTableComponent,
    UserTableComponent,
    RegisterComponent,
    AboutUsComponent,
    NavBarComponent,
    ContactComponent,
    RoleTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClientModule,UserService, AdminRegisterService,AuthService,{
    provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
