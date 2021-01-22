import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonDocument } from 'src/app/model/persondocument';

@Injectable({
  providedIn: 'root'
})
export class PersondocumentService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/persondocument/';

  getDocumentsByPerson(idperson:number){
    return this.http.get<PersonDocument[]>(this.mainUrl+"person/"+idperson)
  }

  getOneDocumentsByPerson(iddocument:number){
    return this.http.get<any>(this.mainUrl+iddocument)
  }

  
  createDocumentsByPerson(persondocument:any){
    console.log(this.mainUrl)
    console.log(persondocument);
    return this.http.post<any>(this.mainUrl,persondocument);
  }
  

  deleteDocument(persondocument:PersonDocument){
    console.log(persondocument.idpersondocument);
    console.log(this.mainUrl+"delete/");
    return this.http.put<PersonDocument>(this.mainUrl+"delete/"+persondocument.idpersondocument,persondocument);
  }


}
