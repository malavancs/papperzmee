import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }
  options;
  initializeUser() {
    this.options = [{
      class: 'fa fa-dashboard',
      text: 'Dashboard'
    }, {
      class: 'fa fa-camer',
      text: 'Hire a photographer'
    }, {
      class: 'fa fa-subscribe',
      text: 'Subscribers'
    }];
  }
  initializeAdmin() {
    this.options = [{
      class: 'fa fa-dashboard',
      text: 'Dashboard',
      path: 'admin/dashboard'
    }, {
      class: 'fa fa-camera',
      text: 'Photographers',
      path: 'admin/photographer'
    }, {
      class: 'fa fa-address-book-o',
      text: 'Subscribers',
      path: 'admin/subscriber'
    },
    {
      class: 'fas fa-cog',
      text: 'Settings'
    }
  ];
  }
  ngOnInit() {

    this.initializeAdmin();

  }
  navigate(option) {
    this.router.navigateByUrl(option.path);
    console.log(option);
  }

}
