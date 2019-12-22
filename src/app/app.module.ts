import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PhotographerListingComponent } from './photographer-listing/photographer-listing.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SubscriberAdminComponent } from './subscriber-admin/subscriber-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavHeaderComponent,
    PhotographerListingComponent,
    DashboardAdminComponent,
    SubscriberAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
