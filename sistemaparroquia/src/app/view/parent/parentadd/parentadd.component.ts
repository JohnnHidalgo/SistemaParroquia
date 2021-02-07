import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateParent, Parent } from 'src/app/model/parent';
import { CreateParentPerson } from 'src/app/model/parentperson';
import { ParentpersonService } from 'src/app/service/ParentPersonService/parentperson.service';
import { ParentService } from 'src/app/service/ParentService/parent.service';

@Component({
  selector: 'app-parentadd',
  templateUrl: './parentadd.component.html',
  styleUrls: ['./parentadd.component.css']
})
export class ParentaddComponent implements OnInit {

  constructor(private router:Router, private service:ParentService, private parentPersonService: ParentpersonService) { }

  ngOnInit(): void {
  }

  parent = new CreateParent('','','','',"2021-02-02", '','','',new Date(), true);
  parentPerson = new CreateParentPerson(1,1,true);
  parentList :Parent[]=[];
  lastid=0;

  createParent(){
    console.log(this.parent)
    var dd = this.parent.dateborn.getDate();
    var mm = this.parent.dateborn.getMonth()+1;
    var yyyy = this.parent.dateborn.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;

    var d = this.parent.tx_date.getDate();
    var m = this.parent.tx_date.getMonth()+1;
    var yy = this.parent.tx_date.getFullYear();
    var txdate = yy+"-"+m+"-"+d;

    this.parent.dateborn=date;
    this.parent.tx_date=txdate;
    console.log(this.parent)
    
    this.service.createParent(this.parent)
    .subscribe(data=>{
      console.log("creacios")
      this.service.getAllParent()
      .subscribe(data=>{
        this.parentList=data;
        this.lastid=this.parentList.length;
        this.parentPerson.idparent=this.lastid;
        
        const id = localStorage.getItem("idperson")|| '{}';
        this.parentPerson.idperson= parseInt(id);
        this.parentPersonService.createParentPerson(this.parentPerson)
        .subscribe(data=>{
          alert("Creación Exitosa");
          this.router.navigate(["personview"]);
        })      
    })
    });

  }

}
