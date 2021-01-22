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
  persona = new CreatePerson('','','','',"2021-02-02",'','','','','',1,'',"2021-02-02",true)

  catequesisType: CatequesisType[]=[];
  catequesisTypeToCreate= new CatequesisType(1,"","",new Date(),true);
  
  createPerson(){  
    console.log(this.persona)
    console.log(this.persona.idcatequesistype)

    this.catequesistypeservice.getOneMaterialByType(this.persona.idcatequesistype.toString())
    .subscribe(data=>{
      this.catequesisTypeToCreate=data[0];
      console.log('data');
      console.log('AAAAthis.catequesisTypeToCreate');
      console.log(this.catequesisTypeToCreate.idcatequesistype);
      this.persona.idcatequesistype = this.catequesisTypeToCreate.idcatequesistype;
      console.log(this.persona)
      
      this.service.createPerson(this.persona)
      .subscribe(data=>{
        alert("Creación Exitosa");
        this.router.navigate(["personlist"]);
      })
    })

  }


  getAllCatequesistypes(){
    this.catequesistypeservice.getAllMaterial()
    .subscribe(data=>{
      console.log(data);
      this.catequesisType=data;
    })
  }

}
