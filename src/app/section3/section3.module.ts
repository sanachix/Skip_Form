import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section3Component } from '@app/section3/section3.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxModule, DxButtonModule, DxAutocompleteModule, DxNumberBoxModule, DxListModule, DxDataGridModule, DxTextAreaModule } from '../../../node_modules/devextreme-angular';
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
    DxDataGridModule,
    DxTextAreaModule


  ],
  declarations: [Section3Component],

  exports:[Section3Component]

})
export class Section3Module { }
