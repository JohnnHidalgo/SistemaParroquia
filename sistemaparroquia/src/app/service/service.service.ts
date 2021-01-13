import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from 'src/app/model/document';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/document/';
  //mainUrl='http://localhost:5000/sistemaparroquia/us-central1/sistemaparroquiabackend';
  
  getAllDocument(){  
    return this.http.get<Document[]>(this.mainUrl);
  }
  
  getOneDocument(iddocument:number){  
    return this.http.get<any>(this.mainUrl+iddocument);
  }

  createDocument(document:Document){
    return this.http.post<Document>(this.mainUrl,document);
  }
  
  //apptset.put('/document/:iddocument', editDocument);
  updateDocument(document:Document){
    return this.http.put<Document>(this.mainUrl+document.iddocument,document);
  }

  deleteDocument(document:Document){
    return this.http.put<Document>(this.mainUrl+"delete/"+document.iddocument,document);
  }

  /*
  createUser(document:Document){
    return this.http.post<Document>(this.baseUrl+"/adduser/",document);
  }
  getUserId(id:number){
    return this.http.get<Document>(this.baseUrl+"/idUser/"+id);
  }

  updateUser(document:Document){
    return this.http.put<Document>(this.baseUrl+"/"+document.idUser,document);
  }
  deleteUser(document:Document){
    return this.http.put<Document>(this.baseUrl+"/"+user.idUser,document);
  }

*/

}
