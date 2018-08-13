import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageModule } from '@app/main-page/main-page.module';
import { Section1Module } from '@app/section1/section1.module';
import { Section2ModuleModule } from '@app/section2/section2-module.module';
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
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    MainPageModule,
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
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
