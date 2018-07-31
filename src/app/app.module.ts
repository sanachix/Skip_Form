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
//import { MainPageComponent } from './main-page/main-page.component';
import { MainPageRouterModule } from '@app/main-page/main-page-router.module';
import { MainPageModule } from '@app/main-page/main-page.module';
import { Section1Component } from './section1/section1.component';

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
    AppRoutingModule
  ],
  declarations: [AppComponent, Section1Component],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
