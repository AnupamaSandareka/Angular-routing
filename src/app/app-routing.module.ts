import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ClientsComponent } from './pages/client/clients/clients.component';
import { UsersComponent } from './pages/master/users/users.component';
import { PackagesComponent } from './pages/master/packages/packages.component';
import { ClientPackagesComponent } from './pages/client/client-packages/client-packages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoomsComponent } from './pages/booking/rooms/rooms.component';
import { RoomBookingComponent } from './pages/booking/room-booking/room-booking.component';
import { AdminLayoutComponent } from './pages/layout/admin-layout/admin-layout.component';
import { LayComponent } from './pages/lay/lay.component';

const routes: Routes = [

  
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'clients', component: ClientsComponent }, //admin
      { path: 'users', component: UsersComponent }, //admin + client
      { path: 'packages', component: PackagesComponent }, //admin
      { path: 'clientPackages', component: ClientPackagesComponent }, //admin
      { path: 'dashboard', component: DashboardComponent }, //admin + client
      { path: 'rooms', component: RoomsComponent }, //client
      { path: 'booking', component: RoomBookingComponent } //client
    ]
  },
  {
    path: '**', component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
