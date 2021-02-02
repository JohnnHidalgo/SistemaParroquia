import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatequesisType } from 'src/app/model/CatequesisType';
import { CatequesistypeService } from 'src/app/service/CatequesisTypeService/catequesistype.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-catequesisedit',
  templateUrl: './catequesisedit.component.html',
  styleUrls: ['./catequesisedit.component.css']
})
export class CatequesiseditComponent implements OnInit {

  constructor(private router:Router,private service:CatequesistypeService) { }
  
  ngOnInit() {
    this.Edit();  
  }

  catequesis= new CatequesisType(1001, 'Cargando', 'UserTest', "2021-02-02", true);
  
  Edit(){
    const id = localStorage.getItem("idcatequesistype")|| '{}';  
    this.service.getOneCatType(+id)
    .subscribe(data=>{
      this.catequesis=data[0];
    })
  }


  Update(catequesis: CatequesisType){

    this.service.updateCatType(catequesis)
    .subscribe(data=>{
      this.catequesis=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["catequesislist"]);
    })
  }


}
