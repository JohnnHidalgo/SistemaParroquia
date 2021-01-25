import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parent } from 'src/app/model/parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/parent/';

  getAllParent(){  
    return this.http.get<Parent[]>(this.mainUrl);
  }
  getOneParent(idparent:number){  
    return this.http.get<any>(this.mainUrl+idparent);
  }
  createParent(parent:any){
    return this.http.post<any>(this.mainUrl,parent);
  }
  updateParent(parent:Parent){
    return this.http.put<Parent>(this.mainUrl+parent.idparent,parent);
  }
  deleteParent(parent:Parent){
    return this.http.put<Parent>(this.mainUrl+"delete/"+parent.idparent,parent);
  }

}