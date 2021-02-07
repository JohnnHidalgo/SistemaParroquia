import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListProductSale, ProductSale } from 'src/app/model/productsale';

@Injectable({
  providedIn: 'root'
})
export class ProductsaleserviceService {

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/productsale/';


  constructor(private http:HttpClient) { }


  getAllProductSale(){  
    return this.http.get<ProductSale[]>(this.mainUrl);
  }
  getOneProductSale(idproductsale:number){  
    return this.http.get<any>(this.mainUrl+idproductsale);
  }
  getProductSaleBySale(idsale:number){
    return this.http.get<ListProductSale[]>(this.mainUrl+"sale/"+idsale);
  }
  createProductSale(sale:any){
    return this.http.post<any>(this.mainUrl,sale);
  }
}
