import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographerListingComponent } from './photographer-listing/photographer-listing.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SubscriberAdminComponent } from './subscriber-admin/subscriber-admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewPhotographerComponent } from './view-photographer/view-photographer.component';


const routes: Routes = [{
  path: 'admin/photographer',
  component: PhotographerListingComponent
}, {
  path: 'admin/dashboard',
  component: DashboardAdminComponent
}, {
  path: 'admin/subscriber',
  component: SubscriberAdminComponent
},
{
  path: 'admin/view/photographer',
  component: ViewPhotographerComponent
},
{
  path: 'admin/view/subscriber',
  component: ViewPhotographerComponent

}
  // {
  //   path: '',
  //   component: MainPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
