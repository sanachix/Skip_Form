import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxComponent, DxButtonModule, DxAutocompleteModule, DxNumberBoxModule, DxCheckBoxModule, DxDropDownBoxModule, DxListModule, DxTreeViewModule, DxValidatorModule } from '../../../node_modules/devextreme-angular';
import { Section1Component } from '@app/section1/section1.component';
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
    DxTreeViewModule,
    DxValidatorModule,
    DxDropDownBoxModule
  ],
  exports:[
    Section1Component
  ],
  declarations: [
    Section1Component
  ]
})
export class Section1Module { }
