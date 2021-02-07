import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, UpdateProduct } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/ProductService/productservice.service';

@Component({
  selector: 'app-prodctoedit',
  templateUrl: './prodctoedit.component.html',
  styleUrls: ['./prodctoedit.component.css']
})
export class ProdctoeditComponent implements OnInit {

  constructor(private router:Router,private service:ProductserviceService) { }

  date = new Date();
  dd = this.date.getDate();
  mm = this.date.getMonth()+1;
  yyyy = this.date.getFullYear();
  
  dateprod = this.yyyy+"-"+this.mm+"-"+this.dd;
  productUpdate= new UpdateProduct(1,'','',0.0, '');
  product= new Product(1,'','',0.0, 0,'','',true);
  
  ngOnInit(): void {
    this.Edit();
  }
    
  Edit(){
    const id = localStorage.getItem("idproducto")|| '{}';  
    this.service.getOneProduct(+id)
    .subscribe(data=>{
      this.product=data[0];
    })
  }

  Update(){
    this.productUpdate.idproducto=this.product.idproducto;
    this.productUpdate.productname=this.product.productname;
    this.productUpdate.description=this.product.description;
    this.productUpdate.price=this.product.price;
    this.productUpdate.quantity=this.product.quantity;

    this.service.updateProduct(this.productUpdate)
    .subscribe(data=>{
      this.productUpdate=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["productlist"]);
    })
  }

}