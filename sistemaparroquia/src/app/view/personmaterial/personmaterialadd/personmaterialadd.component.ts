import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/model/material';
import { CreatePersonMaterial } from 'src/app/model/personmaterial';
import { MaterialserviceService } from 'src/app/service/MaterialService/materialservice.service';
import { PersonmaterialService } from 'src/app/service/PersonMaterialService/personmaterial.service';

@Component({
  selector: 'app-personmaterialadd',
  templateUrl: './personmaterialadd.component.html',
  styleUrls: ['./personmaterialadd.component.css']
})
export class PersonmaterialaddComponent implements OnInit {

  constructor(private router:Router, private service:PersonmaterialService,private http: MaterialserviceService) { }

  personMaterial = new CreatePersonMaterial(1,1,true,true);
  materials:Material[]=[];
  ngOnInit(): void {
    this.getAllMaterrials();
  }

  createPersonMaterial(){
    const idPerson = localStorage.getItem("idperson")|| '{}';  
    this.personMaterial.idperson=parseInt(idPerson);

    const mat = this.personMaterial.idmaterial.toString();
    const idmat = mat.split('-');
    
    this.personMaterial.idmaterial=parseInt(idmat[0]);
    
    console.log(this.personMaterial)


    this.service.createMaterialsByPerson(this.personMaterial)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["personview"]);

    })


  }

  getAllMaterrials(){
    this.http.getAllMaterial()
    .subscribe(data=>{
      console.log(data);
      this.materials = data;
    });
  }
}
