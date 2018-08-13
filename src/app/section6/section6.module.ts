import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section6Component } from '@app/section6/section6.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxModule, DxButtonModule,DxNumberBoxModule, DxListModule, DxDataGridModule, DxTextAreaModule, DxAutocompleteModule, DxPopoverModule } from '../../../node_modules/devextreme-angular';
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
    DxTextAreaModule,
    DxPopoverModule
  ],

  declarations: [Section6Component],

  exports:[Section6Component]
})
export class Section6Module { }
