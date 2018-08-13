import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section10Component } from '@app/section10/section10.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { DxFormModule, DxCheckBoxModule, DxButtonModule, DxAutocompleteModule, DxNumberBoxModule, DxListModule} from '../../../node_modules/devextreme-angular';

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

  ],
  declarations: [Section10Component],

  exports:[Section10Component]
})
export class Section10Module { }
