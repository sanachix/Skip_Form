import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section9Component } from '@app/section9/section9.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxModule, DxButtonModule, DxAutocompleteModule, DxNumberBoxModule, DxListModule } from '../../../node_modules/devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    DxFormModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxNumberBoxModule,
    DxListModule
  ],
  declarations: [Section9Component],

  exports:[Section9Component]
})
export class Section9Module { }
