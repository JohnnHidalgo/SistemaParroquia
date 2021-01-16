import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CatequesisType } from 'src/app/model/CatequesisType';

@Injectable({
  providedIn: 'root'
})
export class CatequesistypeService {

  constructor(private http:HttpClient) { }

  
  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/catequesistype/';

  getAllMaterial(){  
    return this.http.get<CatequesisType[]>(this.mainUrl);
  }
  
  getOneMaterial(idcatequesistype:number){  
    return this.http.get<any>(this.mainUrl+idcatequesistype);
  }

  getOneMaterialByType(catequesistype:String){  
    return this.http.get<any>(this.mainUrl+"type/"+catequesistype);
  }

  createMaterial(catequesisType:any){
    return this.http.post<any>(this.mainUrl,catequesisType);
  }
  
  updateMaterial(catequesisType:CatequesisType){
    return this.http.put<CatequesisType>(this.mainUrl+catequesisType.idcatequesistype,catequesisType);
  }

  deleteMaterial(catequesisType:CatequesisType){
    return this.http.put<CatequesisType>(this.mainUrl+"delete/"+catequesisType.idcatequesistype,catequesisType);
  }

}
