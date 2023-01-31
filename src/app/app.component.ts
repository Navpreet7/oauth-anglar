import { Component } from '@angular/core';
import { UserDetails } from './user-details';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'oAuth-angular';
  userList: UserDetails[] = [
    {
      address: '70 annie',
      emailId: 'nav.mehta8@gmail.com',
      phone: '9501995794',
      gender: 'male',
      firstname: 'Navpreet',
      lastname: 'singh',
    },
    {
      address: '70 annie',
      emailId: 'nav.mehta8@gmail.com',
      phone: '9501995794',
      gender: 'male',
      firstname: 'Jaideep',
      lastname: 'singh',
    },
  ];
  selectedUser: UserDetails | undefined;
  updateSelectedUser(user: UserDetails) {
    this.selectedUser = user;
  }
}
