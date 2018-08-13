import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section8Component } from '@app/section8/section8.component';
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

  declarations: [Section8Component],

  exports:[Section8Component]
})
export class Section8Module { }
