import { Injectable } from '@angular/core';
import { UserModell } from '../modellek/user-modell';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public bevagyokJelentkezve:boolean = false;
  public bejelentkezettUserNeve:string = "";
  public regisztraltUserek:UserModell[] = [];

  constructor() { 
    this.regisztraltUserek.push(
      {username:"admin", password:"123"}
      );
    this.regisztraltUserek.push(
        {username:"admin2", password:"345"}
        );


    this.bevagyokJelentkezve = sessionStorage.getItem("user") != null;
    if (this.bevagyokJelentkezve) {
      this.bejelentkezettUserNeve = sessionStorage.getItem("user")??"";
    }
  }

  public Login(u:string, p:string):boolean
  {
      let sikeres = this.regisztraltUserek.filter(
          (user) => user.username == u &&
                    user.password == p);
      if (sikeres.length == 1) {
        this.bejelentkezettUserNeve = sikeres[0].username;
        this.bevagyokJelentkezve = true;
        sessionStorage.setItem("user", this.bejelentkezettUserNeve);
      } else {
        this.Logout();
      }
      return this.bevagyokJelentkezve;
  }

  public Logout() {
    this.bejelentkezettUserNeve = "";
    this.bevagyokJelentkezve = false;
    sessionStorage.clear();
  }
}
