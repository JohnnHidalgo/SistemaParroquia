import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateDocument, Document } from 'src/app/model/document';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-documentadd',
  templateUrl: './documentadd.component.html',
  styleUrls: ['./documentadd.component.css']
})
export class DocumentaddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  document= new CreateDocument('', 'UserTest', "2021-02-02", true);
  
  createDocument(){
  
    this.service.createDocument(this.document)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["documentlist"]);
    })
  }
}