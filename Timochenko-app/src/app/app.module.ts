import { BrowserModule, HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, Injectable  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { LoaderComponent } from './loader/loader.component';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TiltModule } from "@ssv/ngx.tilt";

import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
import { MouseStyleComponent } from './components/mouse-style/mouse-style.component';

registerLocaleData(localePt);

import Hammer from 'hammerjs';
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ImageLoaderComponent,
    MouseStyleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    NgbModule,
    HammerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "pt-br"},
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent],  
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
