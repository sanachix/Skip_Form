import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section7Component } from '@app/section7/section7.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxModule, DxButtonModule, DxAutocompleteModule, DxNumberBoxModule, DxListModule, DxRadioGroupModule } from '../../../node_modules/devextreme-angular';
import { DxiItemModule } from '../../../node_modules/devextreme-angular/ui/nested/item-dxi';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    DxFormModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxNumberBoxModule,
    DxListModule,
    DxiItemModule,
    DxRadioGroupModule
  ],
  declarations: [Section7Component],
  exports:[Section7Component]
})
export class Section7Module { }
