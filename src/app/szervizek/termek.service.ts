import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TermekModell } from '../modellek/termek-modell';

@Injectable({
  providedIn: 'root'
})
export class TermekService {

  public termekek: TermekModell[] = [];
  
  constructor(private backend:HttpClient) { 
    
  }

  public TermekFrissites():Observable<TermekModell[]> {
    let eredmeny = this.backend
                       .get<TermekModell[]>("http://localhost:3000/products");

    eredmeny.subscribe(
      (erkezoadat) => {
        this.termekek = erkezoadat;
      }
    );

    return eredmeny;
  }

  public getOneProduct(id:number):TermekModell|null {
    let eredmeny = this.backend
                       .get<TermekModell>("http://localhost:3000/products/"+id);

    eredmeny.subscribe(
      (erkezoadat) => {
        return erkezoadat;
      }
    );
    
    return null;
  }

  public deleteOneProduct(id:number) {
    let eredmeny = this.backend
                       .delete("http://localhost:3000/products/"+id);

    eredmeny.subscribe();
  }

  public updateOneProduct(modositottTermek:TermekModell) {
    let eredmeny = this.backend
              .put("http://localhost:3000/products/"+modositottTermek.id,
              modositottTermek);

    eredmeny.subscribe();
  }


  public insertOneProduct(ujTermek:TermekModell) {
    let eredmeny = this.backend
              .post("http://localhost:3000/products",
              ujTermek);

    eredmeny.subscribe();
  }


}
