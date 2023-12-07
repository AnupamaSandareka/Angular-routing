import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from './pages/layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './pages/layout/client-layout/client-layout.component';
import { ClientUserLayoutComponent } from './pages/layout/client-user-layout/client-user-layout.component';
import { RoomBookingComponent } from './pages/booking/room-booking/room-booking.component';
import { RoomsComponent } from './pages/booking/rooms/rooms.component';
import { ClientPackagesComponent } from './pages/client/client-packages/client-packages.component';
import { ClientsComponent } from './pages/client/clients/clients.component';
import { LoginComponent } from './pages/login/login.component';
import { PackagesComponent } from './pages/master/packages/packages.component';
import { UsersComponent } from './pages/master/users/users.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LayComponent } from './pages/lay/lay.component';
import { FormsModule } from '@angular/forms';
import { CustomeInterceptor } from './services/custome.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    ClientUserLayoutComponent,
    RoomBookingComponent,
    RoomsComponent,
    ClientPackagesComponent,
    ClientsComponent,
    LoginComponent,
    PackagesComponent,
    UsersComponent,
    LayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomeInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
