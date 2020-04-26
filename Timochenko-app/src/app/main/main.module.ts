import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './Home/home-view/home-view.component';
import { MainRoutingModule } from './main-routing.module';
import { ImageLoaderComponent } from '../main/components/image-loader/image-loader.component';
import { TiltModule } from '@ssv/ngx.tilt';
import { ChillProjectComponent } from './projects/chill-project/chill-project.component';
import { LitProjectComponent } from './projects/lit-project/lit-project.component';
import { ReebokProjectComponent } from './projects/reebok-project/reebok-project.component';
import { SennaProjectComponent } from './projects/senna-project/senna-project.component';
import { PalmeirasProjectComponent } from './projects/palmeiras-project/palmeiras-project.component';


@NgModule({
  declarations: [
    HomeViewComponent, 
    ImageLoaderComponent, ChillProjectComponent, LitProjectComponent, ReebokProjectComponent, SennaProjectComponent, PalmeirasProjectComponent, 
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TiltModule,
  ],  
  bootstrap: [HomeViewComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
