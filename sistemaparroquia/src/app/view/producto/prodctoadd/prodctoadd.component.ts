import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProduct } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/ProductService/productservice.service';

@Component({
  selector: 'app-prodctoadd',
  templateUrl: './prodctoadd.component.html',
  styleUrls: ['./prodctoadd.component.css']
})
export class ProdctoaddComponent implements OnInit {

  constructor(private router:Router, private service:ProductserviceService) { }


  ngOnInit(): void {
  }
  date = new Date();
  dd = this.date.getDate();
  mm = this.date.getMonth()+1;
  yyyy = this.date.getFullYear();

  dateprod = this.yyyy+"-"+this.mm+"-"+this.dd;
  product= new CreateProduct('', '', 0.0,0.0,"",this.dateprod, true);

  createProduct(){
  
    this.service.createProduct(this.product)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["productlist"]);
    })
  }
}
