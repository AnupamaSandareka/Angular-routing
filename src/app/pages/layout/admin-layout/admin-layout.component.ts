import { Component } from '@angular/core';
import { BookingConstant } from 'src/app/core/bookingConstant';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  menus: any = [];
  filteredMenus: any[] = [];
  role: string = '';
  constructor() {
    this.menus = BookingConstant.menus;
    const userData = localStorage.getItem('localData');

    if (userData != null) {
      this.role = userData;
    }
    this.menus.array.forEach((element: any) => {
      const isRolePresent = element.roles.some((role: any)=> role == this.role);
      if(isRolePresent != undefined){
        this.filteredMenus.push(element);
      }
    });

  }

}
