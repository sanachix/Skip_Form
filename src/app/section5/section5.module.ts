import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section5Component } from '@app/section5/section5.component';
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
  
  declarations: [Section5Component],

  exports:[Section5Component]
})
export class Section5Module { }
