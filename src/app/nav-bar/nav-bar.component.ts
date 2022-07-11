import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  public about(){
    this.router.navigate(['about']);
  }
  public log(){
    this.router.navigate(['home'])
  }

}
