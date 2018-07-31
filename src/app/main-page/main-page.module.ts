import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '@app/main-page/main-page.component';
import { CoreModule } from '@app/core';
import { MainPageRouterModule } from '@app/main-page/main-page-router.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MainPageRouterModule
  ],
  declarations: [
    MainPageComponent
  ]
})
export class MainPageModule { }
