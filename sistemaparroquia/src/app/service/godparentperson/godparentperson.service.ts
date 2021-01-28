import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GodParentPerson } from 'src/app/model/godparentperson';

@Injectable({
  providedIn: 'root'
})
export class GodparentpersonService {
  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/godparentperson/';

  getAllParentPerson(){  
    return this.http.get<GodParentPerson[]>(this.mainUrl);
  }
  getOneParentPerson(iddogparenperson:number){  
    return this.http.get<any>(this.mainUrl+iddogparenperson);
  }
  getParentsByPerson(idperson:number){
    return this.http.get<any>(this.mainUrl+"person/"+idperson);
  }
  createParentPerson(godparentperson:any){
    return this.http.post<any>(this.mainUrl,godparentperson);
  }
  deleteParentPerson(godparentperson:GodParentPerson){
    return this.http.put<GodParentPerson>(this.mainUrl+"delete/"+godparentperson.iddogparenperson,godparentperson);
  }
  
}
