import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public readonly service: AppService) {
  }

  ngOnInit(): void {
    this.email = '';
    this.password = '';
  }

  login(): void {
    console.log('calling login with', this.email, this.password);
    this.service.login(this.email, this.password);
  }
}
