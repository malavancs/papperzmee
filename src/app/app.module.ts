import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { PhotographerListingComponent } from './photographer-listing/photographer-listing.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SubscriberAdminComponent } from './subscriber-admin/subscriber-admin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DataTableModule} from "angular-6-datatable";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavHeaderComponent,
    PhotographerListingComponent,
    DashboardAdminComponent,
    SubscriberAdminComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
