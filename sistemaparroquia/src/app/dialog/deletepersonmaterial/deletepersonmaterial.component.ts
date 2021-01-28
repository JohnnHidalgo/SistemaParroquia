import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonMaterial } from 'src/app/model/personmaterial';
import { PersonmaterialService } from 'src/app/service/PersonMaterialService/personmaterial.service';

@Component({
  selector: 'app-deletepersonmaterial',
  templateUrl: './deletepersonmaterial.component.html',
  styleUrls: ['./deletepersonmaterial.component.css']
})
export class DeletepersonmaterialComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeletepersonmaterialComponent>, public service:PersonmaterialService) { }

  personmaterial = new PersonMaterial(1,1,1,false, true);


  ngOnInit(): void {
    this.getMaterial();
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  getMaterial(){
    const id = localStorage.getItem("idpersonmaterial")||'{}';
    this.service.getOneMaterialsByPerson(+id)
    .subscribe(data=>{
      this.personmaterial=data[0];
    })
  }


  deletePersonMaterial(){
    this.service.deleteMaterial(this.personmaterial)
    .subscribe(data=>{
      this.personmaterial=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["personview"]);
    })
  }

}
