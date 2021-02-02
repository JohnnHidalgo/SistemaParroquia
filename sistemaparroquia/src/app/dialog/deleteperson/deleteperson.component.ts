import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PersonserviceService } from 'src/app/service/PersonService/personservice.service';

@Component({
  selector: 'app-deleteperson',
  templateUrl: './deleteperson.component.html',
  styleUrls: ['./deleteperson.component.css']
})
export class DeletepersonComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog,public dialogRef: MatDialogRef<DeletepersonComponent>, public service:PersonserviceService) {}
  
  
  persona = new Person(1,'','','','',"2021-02-02",'','','','','',1,'',"2021-02-02",true);



  ngOnInit(): void {
    this.getPerson();
  }


  onCloseDialog() {
    this.dialogRef.close();
  }

  getPerson(){
    const id = localStorage.getItem("idperson")|| '{}';  
    this.service.getOnePerson(+id)
    .subscribe(data=>{
      this.persona=data[0];
    })
  }

  deletePerson(){
    this.service.deletePerson(this.persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se Eliminó con Exito...!!!");
      this.dialogRef.close();
      this.router.navigate(["personlist"]);
      window.location.reload();
    })
  }

}






