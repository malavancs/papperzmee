import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-photographer',
  templateUrl: './view-photographer.component.html',
  styleUrls: ['./view-photographer.component.css']
})
export class ViewPhotographerComponent implements OnInit {

  currentTab: string;
  tabs = {
    basic: 'basic',
    address: 'address',
    professional_details: 'professional',
    social_network: 'social'
  }
  constructor(private subscriber: DataServiceService,private router:Router) { }
  message;
  ngOnInit() {
    this.currentTab = this.tabs.basic;
    this.subscriber.currentMessage.subscribe(message => {
      this.message = message;
      console.log("Message", message);
      if(message === 'empty') {
        this.router.navigate(['/admin/photographer']);
      }
    });
  }

}
