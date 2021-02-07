import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListProductSale } from 'src/app/model/productsale';
import { Sale } from 'src/app/model/sale';
import { ProductsaleserviceService } from 'src/app/service/ProductSaleService/productsaleservice.service';
import { SaleserviceService } from 'src/app/service/SalesService/saleservice.service';

@Component({
  selector: 'app-saleview',
  templateUrl: './saleview.component.html',
  styleUrls: ['./saleview.component.css']
})
export class SaleviewComponent implements OnInit {

  productSaleList: ListProductSale[]=[];
  constructor(private http: ProductsaleserviceService, private router: Router, private service: SaleserviceService) { }
  idsale = localStorage.getItem("idsale")|| '{}';  

  sale = new Sale(0,'', 0.0,'','','','',true);
  ngOnInit(): void {
    this.http.getProductSaleBySale(parseInt(this.idsale))
    .subscribe(data=>{
      this.productSaleList=data;
    })

    this.service.getOneSale(+this.idsale)
    .subscribe(data=>{
      this.sale=data[0];
    })
  }

  
}
