import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
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
      text: 'Dashboard'
    }, {
      class: 'fa fa-camera',
      text: 'Photographers'
    }, {
      class: 'fa fa-address-book-o',
      text: 'Subscribers'
    }];
  }
  ngOnInit() {

    this.initializeAdmin();

  }

}
