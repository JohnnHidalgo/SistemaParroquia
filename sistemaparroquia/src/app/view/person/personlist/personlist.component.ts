import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletepersonComponent } from 'src/app/dialog/deleteperson/deleteperson.component';
import { ListPerson, Person } from 'src/app/model/person';
import { PersonserviceService } from 'src/app/service/PersonService/personservice.service';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {


  persons: ListPerson[]=[];
  searchValue:String="";
  
  constructor(private http: PersonserviceService, private router: Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.http.getAllPerson()
    .subscribe(data=>{
      console.log(data);
      this.persons=data;
    })
  }



  ViewPersona(person:Person){
    localStorage.setItem("idperson",person.idperson.toString());
    this.router.navigate(["personview"])
  }


  openDialog(person:Person){
    localStorage.setItem("idperson",person.idperson.toString());
    this.dialog.open(DeletepersonComponent);

  }

  goAddPerson(){
    this.router.navigate(["personadd"])
  }



}
