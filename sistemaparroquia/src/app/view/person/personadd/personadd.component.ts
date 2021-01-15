import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePerson, Person } from 'src/app/model/person';
import { PersonserviceService } from 'src/app/service/PersonService/personservice.service';

@Component({
  selector: 'app-personadd',
  templateUrl: './personadd.component.html',
  styleUrls: ['./personadd.component.css']
})
export class PersonaddComponent implements OnInit {

  constructor(private router:Router, private service:PersonserviceService) { }
  ngOnInit(): void {
  }
  persona = new CreatePerson('','','','',"2021-02-02",'','','','','',1,'',"2021-02-02",true)

  createPerson(){  
    console.log(this.persona)
    this.service.createPerson(this.persona)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["personlist"]);
    })
  }

}
