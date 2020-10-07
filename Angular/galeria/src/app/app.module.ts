import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaleriaCinComponent } from './galeria-cin/galeria-cin.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaCinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
