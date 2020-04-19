import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './Home/home-view/home-view.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
