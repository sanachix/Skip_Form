import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section2Component } from '@app/section2/section2.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxModule, DxButtonModule, DxAutocompleteModule, DxNumberBoxModule, DxListModule, DxTreeViewModule, DxValidatorModule, DxDropDownBoxModule, DxTreeListModule, DxTagBoxModule } from '../../../node_modules/devextreme-angular';
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
    DxTreeListModule,
    DxTagBoxModule,
    DxDropDownBoxModule
  ],
  exports:[
    Section2Component
  ],
  declarations: [
    Section2Component
  ]
})
export class Section2ModuleModule { }
