import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ParentPerson } from 'src/app/model/parentperson';
import { ParentpersonService } from 'src/app/service/ParentPersonService/parentperson.service';

@Component({
  selector: 'app-deleteparent',
  templateUrl: './deleteparent.component.html',
  styleUrls: ['./deleteparent.component.css']
})
export class DeleteparentComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeleteparentComponent>, public service:ParentpersonService) {}

  parentPerson = new ParentPerson(1,1,1,true)

  ngOnInit(): void {
    this.getParent();
  }


  onCloseDialog() {
    this.dialogRef.close();
  }


  getParent(){
    const id = localStorage.getItem("idparentperson")|| '{}';  
    this.service.getOneParentPerson(+id)
    .subscribe(data=>{
      this.parentPerson=data[0];
    })
  }

  deleteParent(){
    this.service.deleteParentPerson(this.parentPerson)
    .subscribe(data=>{
      this.parentPerson=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["personview"]);
      window.location.reload();
    })
  }


}
