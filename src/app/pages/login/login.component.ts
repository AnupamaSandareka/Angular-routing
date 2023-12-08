import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginObj: any = {
    "EmailId": "",
    "Password": ""
  }

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {

  }
  onLogin() {
    debugger;
    this.httpClient.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((response: any) => {

      if (response.result) {
        localStorage.setItem('localData' , JSON.stringify(response.data));
        this.router.navigateByUrl('dashboard');
        // if(response.data.role == "Admin"){
        //   this.router.navigateByUrl("dashboard")
        // }
        // else if (response.data.role == "ClientAdmin") {
        //   this.router.navigateByUrl("Client-Dashboard")
        // }
        // else if (response.data.role == "ClientUser"){
        //   this.router.navigateByUrl("UserDashboard")
        // }
        // else{
        //   alert(response.message);
        // }
        
      }
      else {
        alert("Empty response.");
      }
    })
  }
}
