import { Component } from '@angular/core';
import { UserModell } from '../modellek/user-modell';
import { UserService } from '../szervizek/user.service';

@Component({
  selector: 'app-login-ablak',
  templateUrl: './login-ablak.component.html',
  styleUrls: ['./login-ablak.component.css']
})
export class LoginAblakComponent {

  public user:UserModell = new UserModell();

  constructor (public szerviz:UserService) {

  }

  Kattintas() {
    this.szerviz.Login(this.user.username, 
                        this.user.password);
  }
}
