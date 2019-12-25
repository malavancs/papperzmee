import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber-admin',
  templateUrl: './subscriber-admin.component.html',
  styleUrls: ['./subscriber-admin.component.css']
})
export class SubscriberAdminComponent implements OnInit {

  constructor() { }
  data;
  ngOnInit() {
  this.data = [{
    name: 'Malavan',
    email: 'mlvnhari@gmail.com',
    age: 12,
    address: 'Malv',
    activeSubscription : 2,
    id:1,
    mobileNumber: 7010507962
  }];
  }

}
