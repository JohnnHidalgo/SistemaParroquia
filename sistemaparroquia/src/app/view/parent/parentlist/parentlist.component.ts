import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Parent } from 'src/app/model/parent';
import { CreateParentPerson } from 'src/app/model/parentperson';
import { ParentpersonService } from 'src/app/service/ParentPersonService/parentperson.service';
import { ParentService } from 'src/app/service/ParentService/parent.service';

@Component({
  selector: 'app-parentlist',
  templateUrl: './parentlist.component.html',
  styleUrls: ['./parentlist.component.css']
})
export class ParentlistComponent implements OnInit {

  parents: Parent[]=[];
  searchValue:String="";
  parentPerson = new CreateParentPerson(1,1,true);
  
  constructor(private http: ParentService, private router: Router, public dialog:MatDialog, private parentPersonService: ParentpersonService ) { }


  ngOnInit(): void {
    this.http.getAllParent()
    .subscribe(data=>{
      this.parents=data;
    })
  }

  AgregarParentPerson(parent:Parent){
    const id = localStorage.getItem("idperson")|| '{}';
    
    this.parentPerson.idperson= parseInt(id);
    this.parentPerson.idparent= parent.idparent;

    this.parentPersonService.createParentPerson(this.parentPerson)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["personview"]);
    })      
  }

}
