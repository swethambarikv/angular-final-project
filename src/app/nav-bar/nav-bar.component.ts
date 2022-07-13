import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute , public loginService : LoginService) { }

  ngOnInit(): void {
  }
  public about(){
    this.router.navigate(['about']);
  }
  public log(){
    this.router.navigate(['home'])
  }
public logout(){
  localStorage.removeItem('token')
  this.router.navigate([''])
}

}
