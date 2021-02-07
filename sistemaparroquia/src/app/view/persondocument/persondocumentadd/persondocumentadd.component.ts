import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePersonDocument, PersonDocument } from 'src/app/model/persondocument';
import { PersondocumentService } from 'src/app/service/PersonDocumentService/persondocument.service';
import { Document } from 'src/app/model/document';
import { ServiceService } from 'src/app/service/service.service';
import { CatequesistypeService } from 'src/app/service/CatequesisTypeService/catequesistype.service';

@Component({
  selector: 'app-persondocumentadd',
  templateUrl: './persondocumentadd.component.html',
  styleUrls: ['./persondocumentadd.component.css']
})
export class PersondocumentaddComponent implements OnInit {

  constructor(private router:Router, private service:PersondocumentService,private http: ServiceService, private catequesistypeservice: CatequesistypeService) { }
  
  personDocument = new CreatePersonDocument(1,1,true,"2021-02-02",true);
  documents: Document[] = [];


  ngOnInit(): void {
    this.getAllDocuments();
  }

    
  createPersonDocument(){
    const idPerson = localStorage.getItem("idperson")|| '{}';  
    this.personDocument.idperson=parseInt(idPerson);
    const doc = this.personDocument.iddocument.toString();
    const iddoc = doc.split('-');
    this.personDocument.iddocument=parseInt(iddoc[0]);;


    var dd = this.personDocument.documentdate.getDate();
    var mm = this.personDocument.documentdate.getMonth()+1;
    var yyyy = this.personDocument.documentdate.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;

    this.personDocument.documentdate=date;
    
    this.service.createDocumentsByPerson(this.personDocument)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["personview"]);
    })

  }

  getAllDocuments(){
    this.http.getAllDocument()
    .subscribe(data=>{
      this.documents = data;
    });
  }


}
