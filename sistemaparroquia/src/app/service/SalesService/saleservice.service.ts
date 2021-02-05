import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sale } from 'src/app/model/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleserviceService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/productsale/';

  getAllGodParent(){  
    return this.http.get<Sale[]>(this.mainUrl);
  }
  getOneGodParent(idsale:number){  
    return this.http.get<any>(this.mainUrl+idsale);
  }
  createGodParent(sale:any){
    return this.http.post<any>(this.mainUrl,sale);
  }
  deleteGodParent(sale:Sale){
    return this.http.put<Sale>(this.mainUrl+"delete/"+sale.idsale,parent);
  }

}
