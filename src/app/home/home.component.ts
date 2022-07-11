import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  display: any;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }
  public logIn() {
    this.router.navigate(['/login']);

  }
  public logOut() { 
    this.router.navigate(['/home']);
  }
  public loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

}
