import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GodParent } from 'src/app/model/godparent';

@Injectable({
  providedIn: 'root'
})
export class GodparentService {
  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/godparent/';

  getAllGodParent(){  
    return this.http.get<GodParent[]>(this.mainUrl);
  }
  getOneGodParent(idgodparent:number){  
    return this.http.get<any>(this.mainUrl+idgodparent);
  }
  createGodParent(parent:any){
    return this.http.post<any>(this.mainUrl,parent);
  }
  updateGodParent(godparent:GodParent){
    return this.http.put<GodParent>(this.mainUrl+godparent.idgodparent,parent);
  }
  deleteGodParent(godparent:GodParent){
    return this.http.put<GodParent>(this.mainUrl+"delete/"+godparent.idgodparent,parent);
  }

}