import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletecatequesistypeComponent } from 'src/app/dialog/deletecatequesistype/deletecatequesistype.component';
import { CatequesisType } from 'src/app/model/CatequesisType';
import { CatequesistypeService } from 'src/app/service/CatequesisTypeService/catequesistype.service';

@Component({
  selector: 'app-catequesislist',
  templateUrl: './catequesislist.component.html',
  styleUrls: ['./catequesislist.component.css']
})
export class CatequesislistComponent implements OnInit {

  catequesis: CatequesisType[] = [];

  constructor(private http: CatequesistypeService, private router: Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.http.getAllCatType()
    .subscribe(data=>{
      console.log(data);
      this.catequesis=data;
    });
  }

  EditCatequesisType(catequesis: CatequesisType){
    localStorage.setItem("idcatequesistype",catequesis.idcatequesistype.toString());
    this.router.navigate(["catequesisedit"])
  }

  openDialog(catequesis: CatequesisType){
    localStorage.setItem("idcatequesistype",catequesis.idcatequesistype.toString());
    this.dialog.open(DeletecatequesistypeComponent);
  }

  goAddCatequesisType(){
    this.router.navigate(["catequesisadd"])
  }

}