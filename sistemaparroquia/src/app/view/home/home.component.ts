import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goRegistro(){
    this.router.navigate(["personadd"])
  }

  goAddPersonList(){
    this.router.navigate(["personlist"])
  }
  goCatequistaList(){
    this.router.navigate(["catequistalist"])
  }
  goSaleList(){
    this.router.navigate(["salelist"])
  }

  goProductList(){
    this.router.navigate(["productlist"])
  }

  goDocumentList(){
    this.router.navigate(["documentlist"])
  }

  goMatrialList(){
    this.router.navigate(["materiallist"])
  }
  goCatequesisList(){
    this.router.navigate(["catequesislist"])
  }

}
