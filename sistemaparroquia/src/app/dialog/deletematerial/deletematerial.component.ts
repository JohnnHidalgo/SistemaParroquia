import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/model/material';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MaterialserviceService } from 'src/app/service/MaterialService/materialservice.service';

@Component({
  selector: 'app-deletematerial',
  templateUrl: './deletematerial.component.html',
  styleUrls: ['./deletematerial.component.css']
})
export class DeletematerialComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeletematerialComponent>, public service:MaterialserviceService) {}
  
  material= new Material(1001, 'Cargando', 'UserTest', new Date(), true);
  

  ngOnInit(): void {
    this.getMaterial();
  }



  onCloseDialog() {
    this.dialogRef.close();
  }

  getMaterial(){
    const id = localStorage.getItem("idmaterial")|| '{}';  
    this.service.getOneMaterial(+id)
    .subscribe(data=>{
      this.material=data[0];
    })
  }
  deleteMaterial(){
    this.service.deleteMaterial(this.material)
    .subscribe(data=>{
      this.material=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["materiallist"]);
      window.location.reload();
    })
  }



}
