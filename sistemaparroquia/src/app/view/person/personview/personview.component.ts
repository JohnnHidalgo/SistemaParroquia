import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteparentComponent } from 'src/app/dialog/deleteparent/deleteparent.component';
import { DeletepersondocumentComponent } from 'src/app/dialog/deletepersondocument/deletepersondocument.component';
import { DeletepersonmaterialComponent } from 'src/app/dialog/deletepersonmaterial/deletepersonmaterial.component';
import { ParentPerson, ListParentPerson } from 'src/app/model/parentperson';
import { Person,ListPerson } from 'src/app/model/person';
import { PersonDocument } from 'src/app/model/persondocument';
import { PersonMaterial } from 'src/app/model/personmaterial';
import { ParentpersonService } from 'src/app/service/ParentPersonService/parentperson.service';
import { PersondocumentService } from 'src/app/service/PersonDocumentService/persondocument.service';
import { PersonmaterialService } from 'src/app/service/PersonMaterialService/personmaterial.service';
import { PersonserviceService } from 'src/app/service/PersonService/personservice.service';

@Component({
  selector: 'app-personview',
  templateUrl: './personview.component.html',
  styleUrls: ['./personview.component.css']
})
export class PersonviewComponent implements OnInit {

  constructor(private router:Router,private service:PersonserviceService, private documentService: PersondocumentService, public dialog:MatDialog, private materialService:PersonmaterialService, private parentService:ParentpersonService) { }

  ngOnInit(): void {
    this.getPerson();
    this.getDocuments();
    this.getMaterials();
    this.getParents();
  }

  persona = new ListPerson(1,'','','','',new Date(),'','','','','','','',new Date(),true)
  documentList :PersonDocument[]=[];
  materialList :PersonMaterial[]=[];
  parentList :ListParentPerson[]=[];

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

  getParents(){
    const id = localStorage.getItem("idperson")|| '{}';
    this.parentService.getParentsByPerson(+id)
    .subscribe(data=>{
      this.parentList=data;
    })
  }



  deleteDocument(document:PersonDocument){
    console.log(document)
    console.log(document.idpersondocument)
    localStorage.setItem("idpersondocument",document.idpersondocument.toString());
    this.dialog.open(DeletepersondocumentComponent);
  }

  deleteMaterial(material:PersonMaterial){
    localStorage.setItem("idpersonmaterial",material.idpersonmaterial.toString());
    this.dialog.open(DeletepersonmaterialComponent);
  }

  deleteParent(parent:ListParentPerson){
    console.log("DELETE")
    localStorage.setItem("idparentperson",parent.idparentperson.toString());
    this.dialog.open(DeleteparentComponent);
  }

  gotoNewParent(){
    this.router.navigate(["parentadd"]);
  }


  gotoViewParents(){
    this.router.navigate(["parentlist"]);
  }


  goAddPersonDocument(){
    this.router.navigate(["persondocumentadd"]);
  }

  
  goAddPersonMaterial(){
    this.router.navigate(["personmaterialadd"]);
  }

}