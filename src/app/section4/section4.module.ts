import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section4Component } from '@app/section4/section4.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxModule, DxAutocompleteModule, DxButtonModule, DxNumberBoxModule, DxListModule, DxLookupModule, DxValidatorModule } from '../../../node_modules/devextreme-angular';
import { DxiItemModule } from '../../../node_modules/devextreme-angular/ui/nested/item-dxi';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    DxFormModule,
    DxCheckBoxModule,
    DxAutocompleteModule,
    DxButtonModule,
    DxNumberBoxModule,
    DxListModule,
    DxiItemModule,
    DxLookupModule,
    DxValidatorModule

  ],
  
  declarations: [Section4Component],

  exports:[Section4Component]
})
export class Section4Module { }
