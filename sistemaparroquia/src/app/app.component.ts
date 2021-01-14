import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistemaparroquia';
  screenWidth:number=0;
  constructor(private router:Router){
    this.screenWidth = window.innerWidth;

    window.onresize =()=>{
      this.screenWidth = window.innerWidth;
    };
  }

  listdocument(){
    this.router.navigate(["documentlist"]);
  }

  adddocument(){
    this.router.navigate(["documentadd"]);
  }
}