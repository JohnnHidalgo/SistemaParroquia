import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Material } from 'src/app/model/material';
import { MaterialserviceService } from 'src/app/service/MaterialService/materialservice.service';

@Component({
  selector: 'app-materialedit',
  templateUrl: './materialedit.component.html',
  styleUrls: ['./materialedit.component.css']
})
export class MaterialeditComponent implements OnInit {

  constructor(private router:Router,private service:MaterialserviceService) { }
 
  ngOnInit() {
    this.Edit();  
  }

  material= new Material(1001, 'Cargando', 'UserTest', new Date(), true);
  
  Edit(){
    const id = localStorage.getItem("idmaterial")|| '{}';  
    this.service.getOneMaterial(+id)
    .subscribe(data=>{
      this.material=data[0];
    })
  }

  Update(material:Material){
    console.log('document');
    console.log(document);
    this.service.updateMaterial(material)
    .subscribe(data=>{
      this.material=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["materiallist"]);
    })
  }

}
