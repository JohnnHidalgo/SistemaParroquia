import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletepersondocumentComponent } from 'src/app/dialog/deletepersondocument/deletepersondocument.component';
import { Person,ListPerson } from 'src/app/model/person';
import { PersonDocument } from 'src/app/model/persondocument';
import { PersonMaterial } from 'src/app/model/personmaterial';
import { PersondocumentService } from 'src/app/service/PersonDocumentService/persondocument.service';
import { PersonmaterialService } from 'src/app/service/PersonMaterialService/personmaterial.service';
import { PersonserviceService } from 'src/app/service/PersonService/personservice.service';

@Component({
  selector: 'app-personview',
  templateUrl: './personview.component.html',
  styleUrls: ['./personview.component.css']
})
export class PersonviewComponent implements OnInit {

  constructor(private router:Router,private service:PersonserviceService, private documentService: PersondocumentService, public dialog:MatDialog, private materialService:PersonmaterialService) { }

  ngOnInit(): void {
    this.getPerson();
    this.getDocuments();
    this.getMaterials();
  }

  persona = new ListPerson(1,'','','','',new Date(),'','','','','','','',new Date(),true)
  documentList :PersonDocument[]=[];

  materialList :PersonMaterial[]=[];

  getPerson(){
    const id = localStorage.getItem("idperson")|| '{}';  
    console.log(this.persona);
    this.service.getOnePersonCatequesis(+id)
    .subscribe(data=>{
      this.persona=data[0];
    })
  }

  getDocuments(){
    const id = localStorage.getItem("idperson")|| '{}';
    this.documentService.getDocumentsByPerson(+id)
    .subscribe(data=>{
      this.documentList=data;
    })
  }

  getMaterials(){
    const id = localStorage.getItem("idperson")|| '{}';
    this.materialService.getMaterialsByPerson(+id)
    .subscribe(data=>{
      this.materialList=data;
    })
  }

  deleteDocument(document:PersonDocument){
    console.log(document)
    console.log(document.idpersondocument)
    localStorage.setItem("idpersondocument",document.idpersondocument.toString());
    this.dialog.open(DeletepersondocumentComponent);
  }

  deleteMaterial(material:PersonMaterial){
    console.log(material)
  }

  goAddPersonDocument(){
    this.router.navigate(["persondocumentadd"]);
  }

  
  goAddPersonMaterial(){
    this.router.navigate(["personmaterialadd"]);
  }

}