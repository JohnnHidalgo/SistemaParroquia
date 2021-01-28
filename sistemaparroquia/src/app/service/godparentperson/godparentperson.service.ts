import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GodParentPerson } from 'src/app/model/godparentperson';

@Injectable({
  providedIn: 'root'
})
export class GodparentpersonService {
  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/godparentperson/';

  getAllGodParentPerson(){  
    return this.http.get<GodParentPerson[]>(this.mainUrl);
  }
  getOneGodParentPerson(iddogparenperson:number){  
    return this.http.get<any>(this.mainUrl+iddogparenperson);
  }
  getGodParentsByPerson(idperson:number){
    return this.http.get<any>(this.mainUrl+"godperson/"+idperson);
  }
  createGodParentPerson(godparentperson:any){
    return this.http.post<any>(this.mainUrl,godparentperson);
  }
  deleteGodParentPerson(godparentperson:GodParentPerson){
    return this.http.put<GodParentPerson>(this.mainUrl+"delete/"+godparentperson.iddogparenperson,godparentperson);
  }
  
}
