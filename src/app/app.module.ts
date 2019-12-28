import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PhotographerListingComponent } from './photographer-listing/photographer-listing.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SubscriberAdminComponent } from './subscriber-admin/subscriber-admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableModule} from 'angular-6-datatable';
import { HttpClientModule } from '@angular/common/http';
import { ViewPhotographerComponent } from './view-photographer/view-photographer.component';
import { ViewSubscriberComponent } from './view-subscriber/view-subscriber.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavHeaderComponent,
    PhotographerListingComponent,
    DashboardAdminComponent,
    SubscriberAdminComponent,
    MainPageComponent,
    ViewPhotographerComponent,
    ViewSubscriberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
