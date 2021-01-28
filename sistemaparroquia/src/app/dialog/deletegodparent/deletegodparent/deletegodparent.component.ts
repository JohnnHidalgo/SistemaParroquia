import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GodParentPerson } from 'src/app/model/godparentperson';
import { GodparentService } from 'src/app/service/godparent/godparent.service';
import { GodparentpersonService } from 'src/app/service/godparentperson/godparentperson.service';

@Component({
  selector: 'app-deletegodparent',
  templateUrl: './deletegodparent.component.html',
  styleUrls: ['./deletegodparent.component.css']
})
export class DeletegodparentComponent implements OnInit {


  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeletegodparentComponent>, public service:GodparentpersonService) {}

  godparentPerson = new GodParentPerson(1,1,1,true)


  ngOnInit(): void {
    this.getGodParent();
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  getGodParent(){
    const id = localStorage.getItem("iddogparenperson")|| '{}';  
    this.service.getOneGodParentPerson(+id)
    .subscribe(data=>{
      this.godparentPerson=data[0];
    })
  }

  deleteGodParent(){
    this.service.deleteGodParentPerson(this.godparentPerson)
    .subscribe(data=>{
      this.godparentPerson=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["personview"]);
      window.location.reload();
    })
  }

}
