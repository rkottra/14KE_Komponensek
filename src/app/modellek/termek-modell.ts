
export interface TermekModell {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}
  
/*export class TermekModell {
    public nev          : string = "Ismeretlen termék";
    public ar           : number = 0;
    public kedvezmeny   : number = 0;
    public kiemelt      : boolean = false;

    constructor (n:string, ar: number = 0) {
        this.nev    = n;
        this.ar     = ar;
    }
}*/
