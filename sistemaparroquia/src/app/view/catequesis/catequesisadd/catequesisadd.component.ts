import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateCatequesisType } from 'src/app/model/CatequesisType';
import { CatequesistypeService } from 'src/app/service/CatequesisTypeService/catequesistype.service';

@Component({
  selector: 'app-catequesisadd',
  templateUrl: './catequesisadd.component.html',
  styleUrls: ['./catequesisadd.component.css']
})
export class CatequesisaddComponent implements OnInit {
  constructor(private router:Router, private service:CatequesistypeService) { }

  ngOnInit(): void {
  }
  catequesis= new CreateCatequesisType('', 'UserTest', "2021-02-02", true);
  
  creatCatequesis(){
    this.service.createCatType(this.catequesis)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["catequesislist"]);
    })
  }
}
