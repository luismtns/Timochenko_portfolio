import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VideoPlayerModule {
  poster: string;
  src:string;
  autoplay?:boolean = false;
 }
