import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentlistComponent } from './view/document/documentlist/documentlist.component';
import { DocumentaddComponent } from './view/document/documentadd/documentadd.component';
import { DocumenteditComponent } from './view/document/documentedit/documentedit.component';
import { MateriallistComponent } from './view/material/materiallist/materiallist.component';
import { MaterialaddComponent } from './view/material/materialadd/materialadd.component';
import { MaterialeditComponent } from './view/material/materialedit/materialedit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DeletedocumentComponent } from './dialog/deletedocument/deletedocument.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DeletematerialComponent } from './dialog/deletematerial/deletematerial.component';
import { PersonaddComponent } from './view/person/personadd/personadd.component';
import { PersoneditComponent } from './view/person/personedit/personedit.component';
import { PersonlistComponent } from './view/person/personlist/personlist.component';
import { SearchPersonPipe } from './seekes/searchperson/search-person.pipe';
import { DeletepersonComponent } from './dialog/deleteperson/deleteperson.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PersonviewComponent } from './view/person/personview/personview.component';
import { DeletepersondocumentComponent } from './dialog/deletepersondocument/deletepersondocument.component';
import { PersondocumentaddComponent } from './view/persondocument/persondocumentadd/persondocumentadd.component';
import { PersonmaterialaddComponent } from './view/personmaterial/personmaterialadd/personmaterialadd.component';
import { DeletepersonmaterialComponent } from './dialog/deletepersonmaterial/deletepersonmaterial.component';
import { DeleteparentComponent } from './dialog/deleteparent/deleteparent.component';
import { ParentaddComponent } from './view/parent/parentadd/parentadd.component';
import { GodparentaddComponent } from './view/godparent/godparentadd/godparentadd.component';
import { DeletegodparentComponent } from './dialog/deletegodparent/deletegodparent/deletegodparent.component';
import { GodparentlistComponent } from './view/godparent/godparentlist/godparentlist.component';
import { ParentlistComponent } from './view/parent/parentlist/parentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentlistComponent,
    DocumentaddComponent,
    DocumenteditComponent,
    MateriallistComponent,
    MaterialaddComponent,
    MaterialeditComponent,
    DeletedocumentComponent,
    DeletematerialComponent,
    PersonaddComponent,
    PersoneditComponent,
    PersonlistComponent,
    SearchPersonPipe,
    DeletepersonComponent,
    PersonviewComponent,
    DeletepersondocumentComponent,
    PersondocumentaddComponent,
    PersonmaterialaddComponent,
    DeletepersonmaterialComponent,
    DeleteparentComponent,
    ParentaddComponent,
    GodparentaddComponent,
    DeletegodparentComponent,
    GodparentlistComponent,
    ParentlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents:[
    DeletedocumentComponent,
    DeletematerialComponent,
    DeletepersonComponent,
    DeletepersondocumentComponent,
    DeletepersonmaterialComponent,
    DeleteparentComponent,
    DeletegodparentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
