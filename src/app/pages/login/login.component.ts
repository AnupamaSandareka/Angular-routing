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
        alert("login success");
        localStorage.setItem('loginToken', response.data.token);
        this.router.navigateByUrl('/dashboard');
        
      }
      else {
        alert(response.message);
      }
    })
  }
}
