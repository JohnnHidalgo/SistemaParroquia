import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListPerson, Person } from 'src/app/model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonserviceService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/person/';

  getAllPerson(){  
    return this.http.get<ListPerson[]>(this.mainUrl);
  }
  
  getOnePerson(idperson:number){  
    return this.http.get<any>(this.mainUrl+idperson);
  }
  getOnePersonCatequesis(idperson:number){  
    return this.http.get<any>(this.mainUrl+"catequesis/"+idperson);
  }

  createPerson(person:any){
    return this.http.post<any>(this.mainUrl,person);
  }
  
  updatePerson(person:Person){
    return this.http.put<Person>(this.mainUrl+person.idperson,person);
  }

  deletePerson(person:Person){
    return this.http.put<Person>(this.mainUrl+"delete/"+person.idperson,person);
  }
}
