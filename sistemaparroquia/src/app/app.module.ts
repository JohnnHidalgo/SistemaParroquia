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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DeletedocumentComponent } from './dialog/deletedocument/deletedocument.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    DocumentlistComponent,
    DocumentaddComponent,
    DocumenteditComponent,
    MateriallistComponent,
    MaterialaddComponent,
    MaterialeditComponent,
    DeletedocumentComponent
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
    MatToolbarModule
  ],
  entryComponents:[
    DeletedocumentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
