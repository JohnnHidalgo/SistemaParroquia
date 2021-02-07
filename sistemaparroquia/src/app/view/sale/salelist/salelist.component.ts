import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from 'src/app/model/sale';
import { SaleserviceService } from 'src/app/service/SalesService/saleservice.service';

@Component({
  selector: 'app-salelist',
  templateUrl: './salelist.component.html',
  styleUrls: ['./salelist.component.css']
})
export class SalelistComponent implements OnInit {

  sales: Sale[]=[];
  searchValue:String="";

  constructor(private http: SaleserviceService, private router: Router) { }

  ngOnInit(): void {

    this.http.getAllSale()
    .subscribe(data=>{
      console.log(data);
      this.sales=data;
      console.log(this.sales)
    })
  }

  ViewSale(sale:Sale){
    localStorage.setItem("idsale",sale.idsale.toString());
    this.router.navigate(["saleview"])
  }
  CreateSaleProduct(){
    this.router.navigate(["saleadd"])
  }

}
