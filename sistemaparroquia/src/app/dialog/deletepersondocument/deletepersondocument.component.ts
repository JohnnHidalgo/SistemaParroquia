import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonDocument } from 'src/app/model/persondocument';
import { PersondocumentService } from 'src/app/service/PersonDocumentService/persondocument.service';

@Component({
  selector: 'app-deletepersondocument',
  templateUrl: './deletepersondocument.component.html',
  styleUrls: ['./deletepersondocument.component.css']
})
export class DeletepersondocumentComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeletepersondocumentComponent>, public service:PersondocumentService) { }

  persondocument = new PersonDocument(1,1,1,false,"2021-02-02", true);


  ngOnInit(): void {
    this.getDocument();
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  getDocument(){
    const id = localStorage.getItem("idpersondocument")||'{}';
    this.service.getOneDocumentsByPerson(+id)
    .subscribe(data=>{
      this.persondocument=data[0];
    })

  }


  deletePersonDocument(){
    console.log('this.persondocument')
    console.log(this.persondocument)
    this.service.deleteDocument(this.persondocument)
    .subscribe(data=>{
      this.persondocument=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["personview"]);
    })
  }

}