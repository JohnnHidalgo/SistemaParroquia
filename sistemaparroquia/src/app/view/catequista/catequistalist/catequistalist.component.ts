import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ListCatequista } from 'src/app/model/catequista';
import { CatequistaserviceService } from 'src/app/service/CatequistaService/catequistaservice.service';

@Component({
  selector: 'app-catequistalist',
  templateUrl: './catequistalist.component.html',
  styleUrls: ['./catequistalist.component.css']
})
export class CatequistalistComponent implements OnInit {

  catequistas: ListCatequista[]=[];
  searchValue:String="";
  constructor(private http: CatequistaserviceService, private router: Router, public dialog:MatDialog) { }


  ngOnInit(): void {
    this.http.getAllCatequistas()
    .subscribe(data=>{
      console.log(data);
      this.catequistas=data;
    })
  }

}
