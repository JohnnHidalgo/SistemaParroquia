import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePerson, Person } from 'src/app/model/person';
import { CatequesisType } from 'src/app/model/CatequesisType';
import { CatequesistypeService } from 'src/app/service/CatequesisTypeService/catequesistype.service';
import { PersonserviceService } from 'src/app/service/PersonService/personservice.service';

@Component({
  selector: 'app-personadd',
  templateUrl: './personadd.component.html',
  styleUrls: ['./personadd.component.css']
})
export class PersonaddComponent implements OnInit {

  constructor(private router:Router, private service:PersonserviceService, private catequesistypeservice: CatequesistypeService) { }
  ngOnInit(): void {
    this.getAllCatequesistypes();
  }
  persona = new CreatePerson('','','','',"2021-02-02",'','','','','',1,'',new Date(),true)

  catequesisType: CatequesisType[]=[];
  catequesisTypeToCreate= new CatequesisType(1,"","",new Date(),true);
  
  createPerson(){

    this.catequesistypeservice.getOneCatTypeByType(this.persona.idcatequesistype.toString())
    .subscribe(data=>{
      this.catequesisTypeToCreate=data[0];
      this.persona.idcatequesistype = this.catequesisTypeToCreate.idcatequesistype;
      
      var dd = this.persona.dateborn.getDate();
      var mm = this.persona.dateborn.getMonth()+1;
      var yyyy = this.persona.dateborn.getFullYear();
      var date = yyyy+"-"+mm+"-"+dd;

      this.persona.dateborn=date;

      var d = this.persona.tx_date.getDate();
      var m = this.persona.tx_date.getMonth()+1;
      var yy = this.persona.tx_date.getFullYear();
      var dateCreate = yy+"-"+m+"-"+d;

      this.persona.tx_date=dateCreate;


      this.service.createPerson(this.persona)
      .subscribe(data=>{
        alert("Creación Exitosa");
        this.router.navigate(["personlist"]);
      })
    })

  }


  getAllCatequesistypes(){
    this.catequesistypeservice.getAllCatType()
    .subscribe(data=>{
      this.catequesisType=data;
    })
  }

}
