import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

//para las imágenes
import { ImageFormatterComponent } from "./ImageFormatterComponent";

@NgModule({
  declarations: [
    AppComponent,
    ImageFormatterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([ImageFormatterComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
