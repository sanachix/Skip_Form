import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from '@app/main-page/main-page.component';
import { Section2Component } from '@app/section2/section2.component';
import { Section1Component } from '@app/section1/section1.component';

const routes: Routes = [
  {path:'MainPage', component:MainPageComponent},
  {path:'Section2', component:Section2Component},
  {path:'Section1', component:Section1Component}
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports:[RouterModule],

})
export class MainPageRouterModule { }
