import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
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
    this.FireEvent('hey','hover');
    this.options = [{
      class: 'fa fa-dashboard',
      text: 'Dashboard',
      path: '',
      submenu: [
        {
          class: 'fa fa-user',
          text: 'User',
          path: 'admin/subscriber'
        },
        {
          class: 'fa fa-camera',
          text: 'Photographer',
          path: 'admin/photographer'

        }
      ]
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
  navigate(path) {
    if (path !== '')
      this.router.navigateByUrl(path);
    console.log(path);
  }
  FireEvent(ElementId, EventName) {
    console.log("Comes here",1);

    if (document.getElementById(ElementId) != null) {
      console.log("Comes here",2);

      {
        var evObj = document.createEvent('Events');
        evObj.initEvent(EventName, true, false);
        document.getElementById(ElementId).dispatchEvent(evObj);
      }
    }
  }
}
