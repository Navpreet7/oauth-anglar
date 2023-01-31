import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() userList: UserDetails[] = [];
  @Output() selectedUser = new EventEmitter<UserDetails>();
  results: UserDetails[] = [];
  constructor() {}

  ngOnInit(): void {}

  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.userList.filter((user) =>
      user.firstname.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  selectUser(user: UserDetails) {
    this.selectedUser.emit(user);
  }
}
