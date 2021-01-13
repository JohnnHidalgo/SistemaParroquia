import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletedocumentComponent } from 'src/app/dialog/deletedocument/deletedocument.component';
import { Document } from 'src/app/model/document';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent implements OnInit {
  
  documents: Document[] = [];

  constructor(private http: ServiceService, private router: Router, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.http.getAllDocument()
    .subscribe(data=>{
      console.log(data);
      this.documents=data;
    });
  }

  EditDocument(document:Document){
    localStorage.setItem("iddocument",document.iddocument.toString());
    this.router.navigate(["documentedit"])
  }


  openDialog(document:Document){
    localStorage.setItem("iddocument",document.iddocument.toString());
    this.dialog.open(DeletedocumentComponent);

  }
  DeleteDocument(){
    console.log("DELETE");
  }



}
