import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PageModule { 
  title: string;
  subTitle:string;
  imgSrc: string;
  imgAlt?: string;
}
