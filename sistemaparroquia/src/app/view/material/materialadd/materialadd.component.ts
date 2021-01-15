import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateMaterial, Material } from 'src/app/model/material';
import { MaterialserviceService } from 'src/app/service/MaterialService/materialservice.service';

@Component({
  selector: 'app-materialadd',
  templateUrl: './materialadd.component.html',
  styleUrls: ['./materialadd.component.css']
})
export class MaterialaddComponent implements OnInit {

  constructor(private router:Router, private service:MaterialserviceService) { }

  ngOnInit(): void {
  }
  material= new CreateMaterial('', 'UserTest', new Date(), true);
  
  createMaterial(){
  
    this.service.createMaterial(this.material)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["materiallist"]);
    })
  }


}
