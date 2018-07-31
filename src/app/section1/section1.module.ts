import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxComponent, DxButtonModule, DxAutocompleteModule, DxNumberBoxModule } from '../../../node_modules/devextreme-angular';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    
    DxFormModule,
    DxCheckBoxComponent,
    DxButtonModule,
    DxAutocompleteModule,
    DxNumberBoxModule

   
  ],
  declarations: []
})
export class Section1Module { }
