import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Material } from 'src/app/model/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialserviceService {

  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/material/';

  getAllMaterial(){  
    return this.http.get<Material[]>(this.mainUrl);
  }
  
  getOneMaterial(idmaterial:number){  
    return this.http.get<any>(this.mainUrl+idmaterial);
  }

  createMaterial(material:any){
    return this.http.post<any>(this.mainUrl,material);
  }
  
  updateMaterial(material:Material){
    return this.http.put<Material>(this.mainUrl+material.idmaterial,material);
  }

  deleteMaterial(material:Material){
    return this.http.put<Material>(this.mainUrl+"delete/"+material.idmaterial,material);
  }
}