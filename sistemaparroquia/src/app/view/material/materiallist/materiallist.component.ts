import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletematerialComponent } from 'src/app/dialog/deletematerial/deletematerial.component';
import { Material } from 'src/app/model/material';
import { MaterialserviceService } from 'src/app/service/MaterialService/materialservice.service';

@Component({
  selector: 'app-materiallist',
  templateUrl: './materiallist.component.html',
  styleUrls: ['./materiallist.component.css']
})
export class MateriallistComponent implements OnInit {

  materials: Material[] = [];

  constructor(private http: MaterialserviceService, private router: Router, public dialog:MatDialog) { }


  ngOnInit(): void {
    this.http.getAllMaterial()
    .subscribe(data=>{
      console.log(data);
      this.materials=data;
    })
  }



  EditMaterial(material:Material){
    localStorage.setItem("idmaterial",material.idmaterial.toString());
    this.router.navigate(["materialedit"])
  }


  openDialog(material:Material){
    localStorage.setItem("idmaterial",material.idmaterial.toString());
    this.dialog.open(DeletematerialComponent);

  }

  goAddMaterial(){
    this.router.navigate(["materialadd"])
  }




}
