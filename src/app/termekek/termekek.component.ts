import { Component } from '@angular/core';
import { TermekModell } from '../modellek/termek-modell';
import { TermekService } from '../szervizek/termek.service';

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent {

  public keresendoErtek:string = "";

  
  /*public termekek: TermekModell[] = [
      {
        nev: 'alma',
        ar: 15,
        kedvezmeny:0,
        kiemelt:true
      },
      new TermekModell('körte'),
      new TermekModell('szilva',100),
      new TermekModell('szőlő'),
      new TermekModell('datolya',76),
      new TermekModell('banán'),
      new TermekModell('narancs'),
  ];*/
  public seged: TermekModell[] 
            = this.termekszerviz.termekek;

  constructor(private termekszerviz:TermekService) {
    this.termekszerviz
          .TermekFrissites()
          .subscribe( (erkezoadat)=> {
              this.Kattintas();
          })
  }

  Kattintas() {
    this.seged = this.termekszerviz.termekek.filter(
      (termek) => termek.title
                .toLowerCase()
                .includes(this.keresendoErtek
                              .toLowerCase())
                  && termek.price > 0
    );
  }

  deleteProduct(id:number) {
    this.termekszerviz.deleteOneProduct(id);
  }
}
