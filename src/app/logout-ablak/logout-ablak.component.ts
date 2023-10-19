import { Component } from '@angular/core';
import { UserService } from '../szervizek/user.service';

@Component({
  selector: 'app-logout-ablak',
  templateUrl: './logout-ablak.component.html',
  styleUrls: ['./logout-ablak.component.css']
})
export class LogoutAblakComponent {

  constructor (public szerviz:UserService) {

  }
    
  Kattintas() {
    this.szerviz.Logout();
  }
}
