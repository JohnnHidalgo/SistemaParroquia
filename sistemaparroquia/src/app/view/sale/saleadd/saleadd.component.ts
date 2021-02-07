import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProduct, Product } from 'src/app/model/product';
import { CreateProductSale } from 'src/app/model/productsale';
import { CreateSale, Sale } from 'src/app/model/sale';
import { ProductsaleserviceService } from 'src/app/service/ProductSaleService/productsaleservice.service';
import { ProductserviceService } from 'src/app/service/ProductService/productservice.service';
import { SaleserviceService } from 'src/app/service/SalesService/saleservice.service';

@Component({
  selector: 'app-saleadd',
  templateUrl: './saleadd.component.html',
  styleUrls: ['./saleadd.component.css']
})
export class SaleaddComponent implements OnInit {

  constructor(private router:Router, private productsaleserviceService:ProductsaleserviceService, private saleserviceService: SaleserviceService, private productservice: ProductserviceService) { }

  sale = new CreateSale('',0.0,'',new Date(),"",new Date(),true);
  
  productos: Product[]=[];
  prodSelect = new Product(0,'','',0.0,0,'','',true);

  prodSaleCreate = new CreateProductSale(0,0);

  productosVenta: Product[]=[];
  idlist = new Array();
  lastaleId=0;
  totalSalePrice =0.0;

  saleList: Sale[]=[];

  ngOnInit(): void {
    this.getAllProducts()
  }


  getAllProducts(){
    this.productservice.getAllProducts()
    .subscribe(data=>{
      console.log(data);
      this.productos=data;
    })
  }
  createProductSale(){
    var dd = this.sale.datesale.getDate();
    var mm = this.sale.datesale.getMonth()+1;
    var yyyy = this.sale.datesale.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;
    this.sale.datesale=date;


    var d = this.sale.tx_date.getDate();
    var m = this.sale.tx_date.getMonth()+1;
    var yy = this.sale.tx_date.getFullYear();
    var datetx = yy+"-"+m+"-"+d;
    this.sale.tx_date=datetx;
    this.saleserviceService.createSale(this.sale)
    .subscribe(data=>{
      this.saleserviceService.getAllSale()
      .subscribe(data=>{
        this.saleList=data;
        this.lastaleId= this.saleList.length;
        for( var i = 0; i < this.idlist.length; i++){ 
          this.prodSaleCreate.idsale=this.lastaleId+1;
          this.prodSaleCreate.idproducto=this.idlist[i][0];
          console.log(this.prodSaleCreate)
          console.log(this.idlist[i][0])
          this.productsaleserviceService.createProductSale(this.prodSaleCreate)
          .subscribe(data=>{
          })
        }
      })
      alert("Creación Exitosa");
      this.router.navigate(["salelist"]);
    })
  }


  agregarProduct(){
    const name = this.prodSelect.productname.toString();
    const idproducto = name.split('-');
    this.prodSelect.idproducto=parseInt(idproducto[0]);
    this.prodSelect.productname=idproducto[2];    
    this.idlist.push(idproducto);
    console.log(idproducto)
    this.totalSalePrice+=parseFloat(idproducto[4]);
  }

  DeleteProd(idlis:any){
    console.log(idlis)
    
    
    for( var i = 0; i < this.idlist.length; i++){ 
    
        if ( this.idlist[i] === idlis) { 
    
          this.idlist.splice(i, 1); 
        }
    
    }
    this.totalSalePrice-=parseFloat(idlis[4]);

  }
}
