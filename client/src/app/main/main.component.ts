import {Component} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public readonly service: AppService) {
  }

  get isLogged(): boolean {
    return this.service.isLoggedIn();
  }
}
