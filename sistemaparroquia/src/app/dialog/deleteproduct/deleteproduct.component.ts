import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/ProductService/productservice.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeleteproductComponent>, public service:ProductserviceService) {}

  
  date = new Date();
  dd = this.date.getDate();
  mm = this.date.getMonth()+1;
  yyyy = this.date.getFullYear();
  
  dateprod = this.yyyy+"-"+this.mm+"-"+this.dd;
  product= new Product(1,'','',0.0, 1, '', this.dateprod, true);
  

  ngOnInit(): void {
    this.getProducto();
  }
  onCloseDialog() {
    this.dialogRef.close();
  }

  getProducto(){
    const id = localStorage.getItem("idproducto")|| '{}';  
    this.service.getOneProduct(+id)
    .subscribe(data=>{
      this.product=data[0];
    })
  }
  deleteProduct(){
    this.service.deleteProduct(this.product)
    .subscribe(data=>{
      this.product=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["productlist"]);
      window.location.reload();
    })
  }
}
