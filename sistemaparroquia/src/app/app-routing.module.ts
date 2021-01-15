import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentaddComponent } from './view/document/documentadd/documentadd.component';
import { DocumenteditComponent } from './view/document/documentedit/documentedit.component';
import { DocumentlistComponent } from './view/document/documentlist/documentlist.component';
import { MaterialaddComponent } from './view/material/materialadd/materialadd.component';
import { MaterialeditComponent } from './view/material/materialedit/materialedit.component';
import { MateriallistComponent } from './view/material/materiallist/materiallist.component';
import { PersonaddComponent } from './view/person/personadd/personadd.component';
import { PersoneditComponent } from './view/person/personedit/personedit.component';
import { PersonlistComponent } from './view/person/personlist/personlist.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
