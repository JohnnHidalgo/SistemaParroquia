import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletegodparentComponent } from 'src/app/dialog/deletegodparent/deletegodparent/deletegodparent.component';
import { DeleteparentComponent } from 'src/app/dialog/deleteparent/deleteparent.component';
import { DeletepersondocumentComponent } from 'src/app/dialog/deletepersondocument/deletepersondocument.component';
import { DeletepersonmaterialComponent } from 'src/app/dialog/deletepersonmaterial/deletepersonmaterial.component';
import { ListGodParentPerson } from 'src/app/model/godparentperson';
import { ParentPerson, ListParentPerson } from 'src/app/model/parentperson';
import { Person,ListPerson } from 'src/app/model/person';
import { PersonDocument } from 'src/app/model/persondocument';
import { PersonMaterial } from 'src/app/model/personmaterial';
import { GodparentService } from 'src/app/service/godparent/godparent.service';
import { GodparentpersonService } from 'src/app/service/godparentperson/godparentperson.service';
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

  constructor(private router:Router,private service:PersonserviceService, private documentService: PersondocumentService, public dialog:MatDialog, private materialService:PersonmaterialService, private parentService:ParentpersonService, private godparentService:GodparentpersonService) { }

  ngOnInit(): void {
    this.getPerson();
    this.getDocuments();
    this.getMaterials();
    this.getParents();
    this.getGodParents();
  }

  persona = new ListPerson(1,'','','','',new Date(),'','','','','','','',new Date(),true)
  documentList :PersonDocument[]=[];
  materialList :PersonMaterial[]=[];
  parentList :ListParentPerson[]=[];
  godparentList :ListGodParentPerson[]=[];

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

  getGodParents(){
    const id = localStorage.getItem("idperson")|| '{}';
    this.godparentService.getGodParentsByPerson(+id)
    .subscribe(data=>{
      this.godparentList=data;
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
    localStorage.setItem("idparentperson",parent.idparentperson.toString());
    this.dialog.open(DeleteparentComponent);
  }

  deleteGodParent(godparent:ListGodParentPerson){
    localStorage.setItem("iddogparenperson",godparent.iddogparenperson.toString());
    this.dialog.open(DeletegodparentComponent);
  }

  gotoNewParent(){
    this.router.navigate(["parentadd"]);
  }

  gotoViewParents(){
    this.router.navigate(["parentlist"]);
  }


  gotoNewGodParent(){
    this.router.navigate(["godparentadd"]);
  }

  gotoViewGodParents(){
    this.router.navigate(["godparentlist"]);
  }

  goAddPersonDocument(){
    this.router.navigate(["persondocumentadd"]);
  }
  
  goAddPersonMaterial(){
    this.router.navigate(["personmaterialadd"]);
  }

}