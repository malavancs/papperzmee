import { Component, OnInit } from '@angular/core';
import { PhotographerService } from '../service/photographer.service';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographer-listing',
  templateUrl: './photographer-listing.component.html',
  styleUrls: ['./photographer-listing.component.css']
})
export class PhotographerListingComponent implements OnInit {
data;
  constructor(private photo: PhotographerService,private serviceData: DataServiceService,private route: Router) {

   }

  ngOnInit() {
    this.data = [{"location":{"type":"Point","coordinates":[72.460719,23.022371]},"languagesSpoken":["Hindi","English"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":50,"billingAddress":{"houseNo":"14/987","street":"civilines","city":"Bijnor","postalCode":"246701","state":"Uttar Pradesh"},"rate":{"value":120,"per":"day","valuePerHour":15},"name":"Harry Mash","age":25,"phone":"8400181394","type":"Videographer","expertiseLevel":"Pro","paymentMethod":"NEFT","profilePicture":"https://profile.jpeg","briefBio":"Introduction","equipmentLevel":"DSLR","userRating":3.5,"status":"active","createdAt":"2019-10-04T06:41:04.451Z","updatedAt":"2019-10-04T06:41:04.451Z","id":21},{"location":{"type":"Point","coordinates":[28,77]},"languagesSpoken":["Hindi"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":0,"name":"Shubham Singh","age":24,"phone":"9632584170","type":"Photographer","expertiseLevel":"Mobile","billingAddress":{"houseNo":"12-6","street":"Civilines","city":"Bijnor","postalCode":"246701","state":"Arizona","country":"USA"},"paymentMethod":"Cheque","rate":{"value":100,"per":"hr","valuePerHour":100},"equipmentLevel":"DSLR","briefBio":"","id":20,"createdAt":"2019-11-07T17:26:59.683Z","updatedAt":"2019-11-07T17:54:27.923Z"},{"location":{"type":"Point","coordinates":[77,28]},"languagesSpoken":["English"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":0,"name":"Arbaz Khan","age":25,"phone":"9551234569","type":"Photographer","expertiseLevel":"Mobile","billingAddress":{"houseNo":"15/188","street":"civilines","city":"Bijnor","postalCode":"246701","state":"California","country":"USA"},"paymentMethod":"Cheque","rate":{"value":100,"per":"hr","valuePerHour":100},"equipmentLevel":"DSLR","briefBio":"","id":19,"createdAt":"2019-11-07T17:25:01.551Z","updatedAt":"2019-11-07T17:53:53.642Z"},{"location":{"type":"Point","coordinates":[72.83036,19.134069]},"languagesSpoken":["English"],"lightingOption":true,"greenScreen":true,"postShootRetouchEdit":true,"droneAerialShoot":true,"animationCreation":true,"music":true,"voiceOver":true,"soundEffect":true,"specialEffectFilter":true,"isOnline":false,"usersServiced":0,"name":"Sarvnik Kaur","age":36,"phone":"675432123","type":"Videographer","expertiseLevel":"Pro","billingAddress":{"houseNo":"1202","street":"mhada","city":"mumbai","postalCode":"400053","state":"","country":"USA"},"paymentMethod":"cheque","rate":{"value":100,"per":"hr","valuePerHour":100},"equipmentLevel":"DSLR","briefBio":"","id":18,"createdAt":"2019-11-07T02:52:04.769Z","updatedAt":"2019-11-07T03:57:17.155Z"},{"location":{"type":"Point","coordinates":[180,90]},"languagesSpoken":["Hindi"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":false,"usersServiced":0,"name":"Izhar Ahmad","age":25,"phone":"7417258958","type":"Photographer","expertiseLevel":"Pro","billingAddress":{"houseNo":"245","street":"Baker street","city":"noida","postalCode":"201001","state":"Federated States Of Micronesia","country":"USA"},"paymentMethod":"Card","rate":{"value":null,"per":"day","valuePerHour":0},"equipmentLevel":"DSLR","briefBio":"","id":17,"createdAt":"2019-11-06T16:19:51.067Z","updatedAt":"2019-11-07T17:22:58.878Z"},{"location":{"type":"Point","coordinates":[23.022371,72.460719]},"languagesSpoken":["Hindi","English"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":50,"billingAddress":{"houseNo":"14/987","street":"civilines","city":"Bijnor","postalCode":"246701","state":"Federated States Of Micronesia","country":"USA"},"rate":{"value":120,"per":"day","valuePerHour":15},"name":"Suresh Desai","age":25,"phone":"9400181394","type":"Videographer","expertiseLevel":"Pro","paymentMethod":"NEFT","profilePicture":"https://profile.jpeg","briefBio":"Introduction","equipmentLevel":"DSLR","userRating":3.5,"status":"active","createdAt":"2019-10-04T06:41:04.451Z","updatedAt":"2019-11-06T16:35:39.263Z","id":12},{"location":{"type":"Point","coordinates":[-74.66,40.4987]},"languagesSpoken":["Hindi","English"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":50,"billingAddress":{"houseNo":"14/987","street":"civilines","city":"Bijnor","postalCode":"246701","state":null},"rate":{"value":1200,"per":"day","valuePerHour":150},"name":"Amily Mahajan","age":25,"phone":"9300181394","type":"Videographer","expertiseLevel":"Semi-Pro","paymentMethod":"NEFT","profilePicture":"https://profile.jpeg","briefBio":"Introduction","equipmentLevel":"DSLR","userRating":3.5,"status":"active","createdAt":"2019-10-04T06:41:04.451Z","updatedAt":"2019-11-09T08:37:20.359Z","id":11},{"location":{"type":"Point","coordinates":[74.661,40.499]},"languagesSpoken":["Hindi","English"],"lightingOption":true,"greenScreen":true,"postShootRetouchEdit":true,"droneAerialShoot":true,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":50,"billingAddress":{"houseNo":"14/987","street":"civilines","city":"Bijnor","postalCode":"246701","state":"Uttar Pradesh"},"rate":{"value":120,"per":"day","valuePerHour":15},"name":"Rahul Vaidya","age":25,"phone":"9200181394","type":"Photographer","expertiseLevel":"Mobile","paymentMethod":"NEFT","profilePicture":"https://profile.jpeg","briefBio":"Introduction","equipmentLevel":"DSLR","userRating":3.5,"status":"active","createdAt":"2019-10-04T06:41:04.451Z","updatedAt":"2019-11-09T08:40:25.442Z","id":9},{"location":{"type":"Point","coordinates":[23.024662,72.469924]},"languagesSpoken":["Hindi","English"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":50,"billingAddress":{"houseNo":"14/987","street":"civilines","city":"Bijnor","postalCode":"246701","state":"Uttar Pradesh"},"rate":{"value":120,"per":"day","valuePerHour":15},"name":"Amit Trivedi","age":25,"phone":"9100181394","type":"Photographer","expertiseLevel":"Pro","paymentMethod":"NEFT","profilePicture":"https://profile.jpeg","briefBio":"Introduction","equipmentLevel":"DSLR","userRating":3.5,"status":"active","createdAt":"2019-10-04T06:41:04.451Z","updatedAt":"2019-10-04T06:41:04.451Z","id":8},{"location":{"type":"Point","coordinates":[23.024138,72.467639]},"languagesSpoken":["Hindi","English"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":false,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":50,"billingAddress":{"houseNo":"14/987","street":"civilines","city":"Bijnor","postalCode":"246701","state":"Uttar Pradesh"},"rate":{"value":120,"per":"day","valuePerHour":15},"name":"Hardik Mashru","age":25,"phone":"9000181394","type":"Videographer","expertiseLevel":"Amateur","paymentMethod":"NEFT","profilePicture":"https://profile.jpeg","briefBio":"Introduction","equipmentLevel":"DSLR","userRating":3.5,"status":"active","createdAt":"2019-10-04T06:41:04.451Z","updatedAt":"2019-10-04T06:41:04.451Z","id":7},{"location":{"type":"Point","coordinates":[75.778885,26.92207]},"languagesSpoken":["Hindi","English"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":true,"music":true,"voiceOver":false,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":50,"billingAddress":{"houseNo":"14/987","street":"civilines","city":"Bijnor","postalCode":"246701","state":"Uttar Pradesh"},"rate":{"value":100,"per":"week","valuePerHour":1.79},"name":"Ruchir Srivastava","age":45,"phone":"9820341666","type":"Photographer","expertiseLevel":"Mobile","paymentMethod":"NEFT","profilePicture":"https://profile.jpeg","briefBio":"Introduction","equipmentLevel":"DSLR","userRating":4.5,"status":"active","createdAt":"2019-10-04T06:41:04.451Z","updatedAt":"2019-10-30T10:32:14.501Z","id":3},{"location":{"type":"Point","coordinates":[72.84,19.134069]},"languagesSpoken":["Hindi","English"],"lightingOption":false,"greenScreen":false,"postShootRetouchEdit":false,"droneAerialShoot":false,"animationCreation":false,"music":true,"voiceOver":true,"soundEffect":false,"specialEffectFilter":false,"isOnline":true,"usersServiced":50,"billingAddress":{"houseNo":"14/987","street":"civilines","city":"mumbai","postalCode":"246701","state":null,"country":null},"rate":{"value":1000,"per":"day","valuePerHour":125},"name":"Vikalp Sharma","age":25,"phone":"9920181394","type":"Photographer","expertiseLevel":"Pro","paymentMethod":"NEFT","profilePicture":"https://profile.jpeg","briefBio":"Introduction","equipmentLevel":"DSLR","userRating":4.5,"status":"active","createdAt":"2019-10-02T06:41:04.451Z","updatedAt":"2019-11-09T07:01:12.908Z","id":1}]
    this.photo.getAllPhotoGraphers().subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
  viewdetails(item,index) {
    this.serviceData.changeMessage(item);
    this.route.navigate(['admin/view/photographer']);
  }

}
