import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from 'src/app/model/document';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-documentedit',
  templateUrl: './documentedit.component.html',
  styleUrls: ['./documentedit.component.css']
})
export class DocumenteditComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }
  
  ngOnInit() {
    this.Edit();
  }

  document= new Document(1001, 'Cargando', 'UserTest', "2021-02-02", true);
  
  Edit(){
    const id = localStorage.getItem("iddocument")|| '{}';  
    this.service.getOneDocument(+id)
    .subscribe(data=>{
      this.document=data[0];
    })
  }


  Update(document:Document){
    console.log('document');
    console.log(document);
    this.service.updateDocument(document)
    .subscribe(data=>{
      this.document=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["documentlist"]);
    })
  }

}
