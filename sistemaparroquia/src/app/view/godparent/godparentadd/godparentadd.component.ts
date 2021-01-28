import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateGodParent, GodParent } from 'src/app/model/godparent';
import { CreateGodParentPerson } from 'src/app/model/godparentperson';
import { GodparentService } from 'src/app/service/godparent/godparent.service';
import { GodparentpersonService } from 'src/app/service/godparentperson/godparentperson.service';

@Component({
  selector: 'app-godparentadd',
  templateUrl: './godparentadd.component.html',
  styleUrls: ['./godparentadd.component.css']
})
export class GodparentaddComponent implements OnInit {

  constructor(private router:Router, private service:GodparentService, private godparentPersonService: GodparentpersonService) { }

  ngOnInit(): void {
  }

  godparent = new CreateGodParent('','','','',"2021-02-02", '','','',new Date(), true);
  godparentPerson = new CreateGodParentPerson(1,1,true);
  godparentList :GodParent[]=[];
  lastid=0;

  
  createGodParent(){
    console.log(this.godparent)
    var dd = this.godparent.dateborn.getDate();
    var mm = this.godparent.dateborn.getMonth()+1;
    var yyyy = this.godparent.dateborn.getFullYear();
    var date = yyyy+"-"+mm+"-"+dd;

    var d = this.godparent.tx_date.getDate();
    var m = this.godparent.tx_date.getMonth()+1;
    var yy = this.godparent.tx_date.getFullYear();
    var txdate = yy+"-"+m+"-"+d;

    this.godparent.dateborn=date;
    this.godparent.tx_date=txdate;
    console.log(this.godparent)
    
    this.service.createGodParent(this.godparent)
    .subscribe(data=>{
      console.log("creacios")
      this.service.getAllGodParent()
      .subscribe(data=>{
        this.godparentList=data;
        this.lastid=this.godparentList.length;
        console.log(this.godparentList);
        console.log(this.lastid);
        this.godparentPerson.idgodparent=this.lastid;
        const id = localStorage.getItem("idperson")|| '{}';
        this.godparentPerson.idperson= parseInt(id);
        this.godparentPersonService.createGodParentPerson(this.godparentPerson)
        .subscribe(data=>{
          alert("Creación Exitosa");
          this.router.navigate(["personview"]);
        })      
    })
    });

  }


}
