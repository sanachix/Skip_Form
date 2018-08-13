import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '@app/main-page/main-page.component';
import { CoreModule } from '@app/core';
import { MainPageRouterModule } from '@app/main-page/main-page-router.module';
import { Section1Module } from '@app/section1/section1.module';
import { AppComponent } from '@app/app.component';
import { Section2ModuleModule } from '@app/section2/section2-module.module';
import { DxButtonModule } from '../../../node_modules/devextreme-angular';
import { Section3Module } from '@app/section3/section3.module';
import { Section4Module } from '@app/section4/section4.module';
import { Section5Module } from '@app/section5/section5.module';
import { Section6Module } from '@app/section6/section6.module';
import { Section7Module } from '@app/section7/section7.module';
import { Section8Module } from '@app/section8/section8.module';
import { Section9Module } from '@app/section9/section9.module';
import { Section10Module } from '@app/section10/section10.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MainPageRouterModule,
    Section1Module,
    Section2ModuleModule,
    Section3Module,
    Section4Module,
    Section5Module,
    Section6Module,
    Section7Module,
    Section8Module,
    Section9Module,
    Section10Module,
    DxButtonModule
  ],
  declarations: [
    MainPageComponent,
   
  ],

  //bootstrap: [AppComponent]
})
export class MainPageModule { }
