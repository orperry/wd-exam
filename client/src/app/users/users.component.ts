import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

export class User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  filter = '';

  constructor(public readonly service: AppService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.service.getUsers(this.filter).subscribe(users => {
      this.users = users;
    });
  }

  logout(): void {
    this.service.logout();
  }

  sort(by: string): void {
  }
}
