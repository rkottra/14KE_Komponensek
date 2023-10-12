import { Component } from '@angular/core';
import { TermekModell } from '../modellek/termek-modell';


@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.css']
})
export class TermekekComponent {

  public keresendoErtek:string = "";

  public termekek: TermekModell[] = [
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
  ];
  public seged: TermekModell[] = this.termekek;

  constructor() {
    this.Kattintas();
  }

  Kattintas() {
    this.seged = this.termekek.filter(
      (termek) => termek.nev
                .toLowerCase()
                .includes(this.keresendoErtek
                              .toLowerCase())
                  && termek.ar > 0
    );
  }
}
