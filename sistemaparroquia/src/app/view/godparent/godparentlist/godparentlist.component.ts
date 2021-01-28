import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GodParent } from 'src/app/model/godparent';
import { CreateGodParentPerson } from 'src/app/model/godparentperson';
import { GodparentService } from 'src/app/service/godparent/godparent.service';
import { GodparentpersonService } from 'src/app/service/godparentperson/godparentperson.service';

@Component({
  selector: 'app-godparentlist',
  templateUrl: './godparentlist.component.html',
  styleUrls: ['./godparentlist.component.css']
})
export class GodparentlistComponent implements OnInit {

  godparents: GodParent[]=[];
  searchValue:String="";
  godparentPerson = new CreateGodParentPerson(1,1,true);
  
  constructor(private http: GodparentService, private router: Router, public dialog:MatDialog, private godparentPersonService: GodparentpersonService ) { }


  ngOnInit(): void {
    this.http.getAllGodParent()
    .subscribe(data=>{
      console.log(data);
      this.godparents=data;
    })
  }

  AgregarParentPerson(godparent:GodParent){
    const id = localStorage.getItem("idperson")|| '{}';
    
    this.godparentPerson.idperson= parseInt(id);
    this.godparentPerson.idgodparent= godparent.idgodparent;

    console.log(this.godparentPerson);
    this.godparentPersonService.createGodParentPerson(this.godparentPerson)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["personview"]);
    })      
  }
}
