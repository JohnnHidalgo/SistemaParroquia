import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CatequesisType } from 'src/app/model/CatequesisType';
import { CatequesistypeService } from 'src/app/service/CatequesisTypeService/catequesistype.service';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-deletecatequesistype',
  templateUrl: './deletecatequesistype.component.html',
  styleUrls: ['./deletecatequesistype.component.css']
})
export class DeletecatequesistypeComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeletecatequesistypeComponent>, public service:CatequesistypeService) {}  
  catequesis= new CatequesisType(1001, 'Cargando', 'UserTest', "2021-02-02", true);
  
  ngOnInit(): void {
    this.getCatequesisType();
  }
  onCloseDialog() {
    this.dialogRef.close();
  }

  getCatequesisType(){
    const id = localStorage.getItem("idcatequesistype")|| '{}';  
    this.service.getOneCatType(+id)
    .subscribe(data=>{
      this.catequesis=data[0];
    })
  }
  deleteCatequesis(){
    this.service.deleteMaterial(this.catequesis)
    .subscribe(data=>{
      this.catequesis=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["catequesislist"]);
      window.location.reload();
    })
  }
}
