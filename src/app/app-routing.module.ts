import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographerListingComponent } from './photographer-listing/photographer-listing.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SubscriberAdminComponent } from './subscriber-admin/subscriber-admin.component';


const routes: Routes = [{
  path: 'admin/photographer',
  component: PhotographerListingComponent
},{
  path: 'admin/dashboard',
  component: DashboardAdminComponent
},{
  path:'admin/subscriber',
  component: SubscriberAdminComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
