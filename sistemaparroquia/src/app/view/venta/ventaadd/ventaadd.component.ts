import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product, VentaProduct } from 'src/app/model/product';
import { ProductserviceService } from 'src/app/service/ProductService/productservice.service';

@Component({
  selector: 'app-ventaadd',
  templateUrl: './ventaadd.component.html',
  styleUrls: ['./ventaadd.component.css']
})
export class VentaaddComponent implements OnInit {

  productsVenta: VentaProduct[] = [];

  products: Product[] = [];

  prodhelper = new VentaProduct(false,1,'','',0,0,'','',true);
  
  constructor(private http: ProductserviceService, private router: Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.http.getAllProducts()
    .subscribe(data=>{
      this.products=data;
    });
  }

  

}