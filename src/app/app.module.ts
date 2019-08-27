
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Network } from 'vis-network';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,	  
    ReactiveFormsModule,
    BrowserModule,
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
