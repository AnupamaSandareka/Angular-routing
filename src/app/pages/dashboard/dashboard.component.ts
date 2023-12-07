import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  users: any[] = [];

  constructor(
    private httpClient: HttpClient
  ){
    this.getAllUser();
  }

  getAllUser() {
    debugger;
    this.httpClient.get('https://freeapi.miniprojectideas.com/api/User/GetAllUsers').subscribe((response: any) => {
      this.users = response.data;
    })
  }
}
