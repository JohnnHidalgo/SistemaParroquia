import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, UpdateProduct } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/product/';
  
  getAllProducts(){  
    return this.http.get<Product[]>(this.mainUrl);
  }
  
  getOneProduct(idproducto:number){  
    return this.http.get<any>(this.mainUrl+idproducto);
  }

  createProduct(producto:any){
    return this.http.post<any>(this.mainUrl,producto);
  }
  
  updateProduct(producto:UpdateProduct){
    console.log(producto)
    return this.http.put<UpdateProduct>(this.mainUrl+producto.idproducto,producto);
  }

  deleteProduct(producto:Product){
    return this.http.put<Product>(this.mainUrl+"delete/"+producto.idproducto,producto);
  }

}