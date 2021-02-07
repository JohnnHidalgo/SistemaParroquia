import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatequesisaddComponent } from './view/catequesis/catequesisadd/catequesisadd.component';
import { CatequesiseditComponent } from './view/catequesis/catequesisedit/catequesisedit.component';
import { CatequesislistComponent } from './view/catequesis/catequesislist/catequesislist.component';
import { CatequistalistComponent } from './view/catequista/catequistalist/catequistalist.component';
import { DocumentaddComponent } from './view/document/documentadd/documentadd.component';
import { DocumenteditComponent } from './view/document/documentedit/documentedit.component';
import { DocumentlistComponent } from './view/document/documentlist/documentlist.component';
import { GodparentaddComponent } from './view/godparent/godparentadd/godparentadd.component';
import { GodparentlistComponent } from './view/godparent/godparentlist/godparentlist.component';
import { MaterialaddComponent } from './view/material/materialadd/materialadd.component';
import { MaterialeditComponent } from './view/material/materialedit/materialedit.component';
import { MateriallistComponent } from './view/material/materiallist/materiallist.component';
import { ParentaddComponent } from './view/parent/parentadd/parentadd.component';
import { ParentlistComponent } from './view/parent/parentlist/parentlist.component';
import { PersonaddComponent } from './view/person/personadd/personadd.component';
import { PersoneditComponent } from './view/person/personedit/personedit.component';
import { PersonlistComponent } from './view/person/personlist/personlist.component';
import { PersonviewComponent } from './view/person/personview/personview.component';
import { PersondocumentaddComponent } from './view/persondocument/persondocumentadd/persondocumentadd.component';
import { PersonmaterialaddComponent } from './view/personmaterial/personmaterialadd/personmaterialadd.component';
import { ProdctoaddComponent } from './view/producto/prodctoadd/prodctoadd.component';
import { ProdctoeditComponent } from './view/producto/prodctoedit/prodctoedit.component';
import { ProdctolistComponent } from './view/producto/prodctolist/prodctolist.component';
import { SaleaddComponent } from './view/sale/saleadd/saleadd.component';
import { SalelistComponent } from './view/sale/salelist/salelist.component';
import { SaleviewComponent } from './view/sale/saleview/saleview.component';
import { VentaaddComponent } from './view/venta/ventaadd/ventaadd.component';

const routes: Routes = [
  {path:'documentadd',component:DocumentaddComponent},
  {path:'documentlist',component:DocumentlistComponent},
  {path:'documentedit',component:DocumenteditComponent},
  {path:'materialadd',component:MaterialaddComponent},
  {path:'materiallist',component:MateriallistComponent},
  {path:'materialedit',component:MaterialeditComponent},
  {path:'personadd',component:PersonaddComponent},
  {path:'personlist',component:PersonlistComponent},
  {path:'personedit',component:PersoneditComponent},
  {path:'personview',component:PersonviewComponent},
  {path:'persondocumentadd',component:PersondocumentaddComponent},
  {path:'personmaterialadd',component:PersonmaterialaddComponent},
  {path:'parentadd',component:ParentaddComponent},
  {path:'parentlist',component:ParentlistComponent},
  {path:'godparentadd',component:GodparentaddComponent},
  {path:'godparentlist',component:GodparentlistComponent},
  {path:'catequistalist',component:CatequistalistComponent},
  {path:'productlist',component:ProdctolistComponent},
  {path:'productadd',component:ProdctoaddComponent},
  {path:'productedit',component:ProdctoeditComponent},
  {path:'ventadd',component:VentaaddComponent},
  {path:'catequesislist',component:CatequesislistComponent},
  {path:'catequesisadd',component:CatequesisaddComponent},
  {path:'catequesisedit',component:CatequesiseditComponent},
  {path:'salelist',component:SalelistComponent},
  {path:'saleview',component:SaleviewComponent},
  {path:'saleadd',component:SaleaddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
