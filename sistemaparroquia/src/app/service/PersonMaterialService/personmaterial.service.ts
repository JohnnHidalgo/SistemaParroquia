import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonMaterial } from 'src/app/model/personmaterial';

@Injectable({
  providedIn: 'root'
})
export class PersonmaterialService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/personmaterial/';

  getMaterialsByPerson(idperson:number){
    return this.http.get<PersonMaterial[]>(this.mainUrl+"person/"+idperson)
  }

  getOneMaterialsByPerson(iddocument:number){
    return this.http.get<any>(this.mainUrl+iddocument)
  }

  
  createMaterialsByPerson(personmaterial:any){
    console.log(this.mainUrl)
    console.log(personmaterial);
    return this.http.post<any>(this.mainUrl,personmaterial);
  }
  

  deleteMaterial(personmaterial:PersonMaterial){
    console.log(personmaterial.idpersonmaterial);
    console.log(this.mainUrl+"delete/");
    return this.http.put<PersonMaterial>(this.mainUrl+"delete/"+personmaterial.idpersonmaterial,personmaterial);
  }


}
