import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateDocument,Document } from 'src/app/model/document';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/document/';
  
  getAllDocument(){  
    return this.http.get<Document[]>(this.mainUrl);
  }
  
  getOneDocument(iddocument:number){  
    return this.http.get<any>(this.mainUrl+iddocument);
  }

  createDocument(document:any){
    return this.http.post<any>(this.mainUrl,document);
  }
  
  updateDocument(document:Document){
    return this.http.put<Document>(this.mainUrl+document.iddocument,document);
  }

  deleteDocument(document:Document){
    return this.http.put<Document>(this.mainUrl+"delete/"+document.iddocument,document);
  }


}
