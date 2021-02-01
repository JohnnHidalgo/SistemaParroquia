import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service/service.service';
import { Document } from 'src/app/model/document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletedocument',
  templateUrl: './deletedocument.component.html',
  styleUrls: ['./deletedocument.component.css']
})
export class DeletedocumentComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeletedocumentComponent>, public service:ServiceService) {}
  
  document= new Document(1001, 'Cargando', 'UserTest', "2021-02-02", true);
  
  ngOnInit(): void {
    this.getDocument();
  }
  onCloseDialog() {
    this.dialogRef.close();
  }

  getDocument(){
    const id = localStorage.getItem("iddocument")|| '{}';  
    this.service.getOneDocument(+id)
    .subscribe(data=>{
      this.document=data[0];
    })
  }
  deleteDocument(){
    this.service.deleteDocument(this.document)
    .subscribe(data=>{
      this.document=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["documentlist"]);
      window.location.reload();
    })
  }
}
