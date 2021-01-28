import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catequista, ListCatequista } from 'src/app/model/catequista';

@Injectable({
  providedIn: 'root'
})
export class CatequistaserviceService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/catequista/';

  getAllCatequistas(){  
    return this.http.get<ListCatequista[]>(this.mainUrl);
  }
  
  getOneCatequista(idcatequista:number){  
    return this.http.get<any>(this.mainUrl+idcatequista);
  }

  createCatequista(catequista:any){
    return this.http.post<any>(this.mainUrl,catequista);
  }
  
  updateCatequista(catequista:Catequista){
    return this.http.put<Catequista>(this.mainUrl+catequista.idcatequista,catequista);
  }

  deleteCatequista(catequista:Catequista){
    return this.http.put<Catequista>(this.mainUrl+"delete/"+catequista.idcatequista,catequista);
  }
}
