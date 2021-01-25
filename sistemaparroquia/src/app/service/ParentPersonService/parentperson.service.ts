import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParentPerson } from 'src/app/model/parentperson';

@Injectable({
  providedIn: 'root'
})
export class ParentpersonService {


  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/parentperson/';

  getAllParentPerson(){  
    return this.http.get<ParentPerson[]>(this.mainUrl);
  }
  getOneParentPerson(idparentperson:number){  
    return this.http.get<any>(this.mainUrl+idparentperson);
  }
  getParentsByPerson(idperson:number){
    return this.http.get<any>(this.mainUrl+"person/"+idperson);
  }
  createParentPerson(parentperson:any){
    return this.http.post<any>(this.mainUrl,parentperson);
  }
  deleteParentPerson(parentperson:ParentPerson){
    return this.http.put<ParentPerson>(this.mainUrl+"delete/"+parentperson.idparentperson,parentperson);
  }
}
