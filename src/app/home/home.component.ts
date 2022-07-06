import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  display: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public logIn() {
    this.router.navigate(['/login']);

  }
  public logOut() { }

}
