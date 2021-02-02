import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteproductComponent } from 'src/app/dialog/deleteproduct/deleteproduct.component';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/ProductService/productservice.service';

@Component({
  selector: 'app-prodctolist',
  templateUrl: './prodctolist.component.html',
  styleUrls: ['./prodctolist.component.css']
})
export class ProdctolistComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: ProductserviceService, private router: Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.http.getAllProducts()
    .subscribe(data=>{
      console.log(data);
      this.products=data;
    });
  }

  EditProduct(product:Product){
    localStorage.setItem("idproducto",product.idproducto.toString());
    this.router.navigate(["productedit"])
  }


  openDialog(product:Product){
    localStorage.setItem("idproducto",product.idproducto.toString());

    this.dialog.open(DeleteproductComponent);
  }

  goAddProduct(){
    this.router.navigate(["productadd"])
  }




}
