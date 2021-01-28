import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GodParent } from 'src/app/model/godparent';

@Injectable({
  providedIn: 'root'
})
export class GodparentService {
  constructor(private http:HttpClient) { }

  mainUrl='https://us-central1-sistemaparroquia.cloudfunctions.net/sistemaparroquiabackend/godparent/';

  getAllParent(){  
    return this.http.get<GodParent[]>(this.mainUrl);
  }
  getOneParent(idgodparent:number){  
    return this.http.get<any>(this.mainUrl+idgodparent);
  }
  createParent(parent:any){
    return this.http.post<any>(this.mainUrl,parent);
  }
  updateParent(godparent:GodParent){
    return this.http.put<GodParent>(this.mainUrl+godparent.idgodparent,parent);
  }
  deleteParent(godparent:GodParent){
    return this.http.put<GodParent>(this.mainUrl+"delete/"+godparent.idgodparent,parent);
  }

}