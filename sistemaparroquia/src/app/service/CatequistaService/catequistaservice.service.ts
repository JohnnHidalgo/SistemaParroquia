import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catequista, ListCatequista } from 'src/app/model/catequista';

@Injectable({
  providedIn: 'root'
})
export class CatequistaserviceService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/catequista/';

  getAllPerson(){  
    return this.http.get<ListCatequista[]>(this.mainUrl);
  }
  
  getOnePerson(idcatequista:number){  
    return this.http.get<any>(this.mainUrl+idcatequista);
  }

  createPerson(person:any){
    return this.http.post<any>(this.mainUrl,person);
  }
  
  updatePerson(catequista:Catequista){
    return this.http.put<Catequista>(this.mainUrl+catequista.idcatequista,catequista);
  }

  deletePerson(catequista:Catequista){
    return this.http.put<Catequista>(this.mainUrl+"delete/"+catequista.idcatequista,catequista);
  }
}
