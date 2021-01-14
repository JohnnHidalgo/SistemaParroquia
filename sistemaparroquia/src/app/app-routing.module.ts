import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentaddComponent } from './view/document/documentadd/documentadd.component';
import { DocumenteditComponent } from './view/document/documentedit/documentedit.component';
import { DocumentlistComponent } from './view/document/documentlist/documentlist.component';

const routes: Routes = [
  {path:'documentadd',component:DocumentaddComponent},
  {path:'documentlist',component:DocumentlistComponent},
  {path:'documentedit',component:DocumenteditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
